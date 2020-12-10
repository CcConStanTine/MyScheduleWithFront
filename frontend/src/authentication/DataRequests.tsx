import { inputData } from '../utils/interfaces';
import { RequestsMethods } from '../utils/requestsInterfaces';
import { dateTimeTypes } from '../utils/variables';
import UserCredentialsRequests from './UserCredentialsRequests';

class DataRequests extends UserCredentialsRequests {

    private getScheduleValue = (value: string) => `/schedule/${this.userId}/${value}`;

    public setProprietDate = (date: string, type: string) => {
        if (type === dateTimeTypes.ADDDAY)
            return date.slice(11, 19);
        else if (type === dateTimeTypes.EDITDAY)
            return date.slice(0, 9);

        return date.slice(0, 10);
    }

    public validateDate = (date: any) => {
        const year = date.slice(0, 4);
        const month = date.slice(5, 7);
        const day = parseInt(date.slice(8, 10));

        const _date = `${year}-${month}-${day < 10 ? `0${day}` : day}`;

        return _date;
    }

    public getCurrentDate = () => {
        const date = new Date();

        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;
    }

    public addPlanByPlanType = async (type: string, data: inputData) => {
        const { startDate } = data;
        const { day, ..._data } = data;
        const id = await this.getPlanIdByTypeAndDate(type, day ? day : startDate);

        return await this.addPlanByPlanTypeAndId(type, id, _data);
    };

    public getPlanIdByTypeAndDate = (type: string, date: string) =>
        this.handleRequests(RequestsMethods.GET, this.getScheduleValue(`${type}?local_date=${this.validateDate(date)}`))
            .then(data => data[`${type}Id`]);

    public addPlanByPlanTypeAndId = async (type: string, id: number, data: inputData) =>
        this.handleRequests(RequestsMethods.POST, this.getScheduleValue(`${type}/${id}/${type}_plan`), data);

    public changePlanByType = async (type: string, id: number, data: inputData) => {
        const { day, ..._data } = data;

        return this.handleRequests(RequestsMethods.PATCH, this.getScheduleValue(`${type}_plan/${id}`), _data);
    };

    public toggleFinishPlanByTypeAndId = (type: string, id: number) =>
        this.handleRequests(RequestsMethods.PATCH, this.getScheduleValue(`${type}_plan/${id}/fulfilled`), {});

    public deletePlanByTypeAndId = (type: string, id: number) =>
        this.handleRequests(RequestsMethods.DELETE, this.getScheduleValue(`${type}_plan/${id}`));

    public getPlanByTypeAndId = (type: string, id: number) =>
        this.handleRequests(RequestsMethods.GET, this.getScheduleValue(`${type}_plans/${id}`));

    public getTypeDataByDate = (type: string, date: string) =>
        this.handleRequests(RequestsMethods.GET, this.getScheduleValue(`${type}s?local_date=${this.validateDate(date)}`));

    public getTypeDataById = (type: string, id: number) =>
        this.handleRequests(RequestsMethods.GET, this.getScheduleValue(`${type}/${id}`));

    public getTypePlansByTypeAndId = (type: string, id: number) =>
        this.handleRequests(RequestsMethods.GET, this.getScheduleValue(`${type}/${id}/${type}_plans`));

    public getTypePlans = async (type: string, date?: string | undefined) => {
        const _date = date ? this.validateDate(date) : this.getCurrentDate();
        const id = await this.getPlanIdByTypeAndDate(type, _date);
        const plans = await this.getTypePlansByTypeAndId(type, id);

        return plans;
    };
}

export default new DataRequests();