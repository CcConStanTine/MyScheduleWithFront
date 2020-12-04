package com.pk.ms.dto.month;

import com.pk.ms.abstracts.PlanDTO;

import java.time.LocalDate;

public class MonthPlanInputDTO extends PlanDTO<LocalDate> {

    public MonthPlanInputDTO() {
    }

    public MonthPlanInputDTO(String content, LocalDate startDate, LocalDate endDate) {
        super(content, startDate, endDate);
    }
}
