package com.pk.ms.controllers.day;

import com.pk.ms.dto.day.DayPlanInputDTO;
import com.pk.ms.entities.DeleteMessage;
import com.pk.ms.entities.day.DayPlan;
import com.pk.ms.services.day.DayPlanService;
import org.hibernate.sql.Delete;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@PreAuthorize("hasRole('ROLE_ADMIN') or authentication.principal.id == #scheduleId")
@RequestMapping("/schedule/{schedule_id}")
public class DayPlanController {

    private final DayPlanService dayPlanService;

    public DayPlanController(DayPlanService dayPlanService) {
        this.dayPlanService = dayPlanService;
    }

    @PostMapping(value = "/day/{day_id}/daily_schedule")
    public ResponseEntity<List<DayPlan>> addDailyRoutinePlansToTheDay(@PathVariable("schedule_id") long scheduleId,
                                                                      @PathVariable("day_id") long dayId) {
        return ResponseEntity.ok(dayPlanService.addDailyRoutinePlansToTheDayPlans(scheduleId, dayId));
    }

    @GetMapping(value = "/day/{day_id}/day_plans")
    public ResponseEntity<List<DayPlan>> getDayPlans(@PathVariable("schedule_id") long scheduleId,
                                                     @PathVariable("day_id") long dayId) {
        return ResponseEntity.ok(dayPlanService.getDayPlansByScheduleIdAndDayId(scheduleId, dayId));
    }

    @GetMapping(value = "/day_plans/{day_plan_id}")
    public ResponseEntity<DayPlan> getDayPlan(@PathVariable("schedule_id") long scheduleId,
                                              @PathVariable("day_plan_id") long dayPlanId) {
        return ResponseEntity.ok(dayPlanService.getDayPlan(scheduleId, dayPlanId));
    }

    @PostMapping(value="/day/{day_id}/day_plan", consumes = "application/json")
    public ResponseEntity<DayPlan> createDayPlan(@PathVariable("schedule_id") long scheduleId,
                                                 @PathVariable("day_id") long dayId,
                                                 @Valid @RequestBody DayPlanInputDTO dayPlanInputDTO) {

        return ResponseEntity.ok(dayPlanService.createDayPlan(scheduleId, dayId, dayPlanInputDTO));
    }

    @PatchMapping(value="/day_plan/{day_plan_id}", consumes = "application/json")
    public ResponseEntity<DayPlan> updateDayPlan(@PathVariable("schedule_id") long scheduleId,
                                                 @PathVariable("day_plan_id") long dayPlanId,
                                                 @Valid @RequestBody DayPlanInputDTO dayPlanInputDTO) {

        return ResponseEntity.ok(dayPlanService.updateDayPlan(scheduleId, dayPlanId, dayPlanInputDTO));
    }

    @PatchMapping("/day_plan/{day_plan_id}/fulfilled")
    public ResponseEntity<DayPlan> updateFulfilledStatus(@PathVariable("schedule_id") long scheduleId,
                                                         @PathVariable("day_plan_id") long dayPlanId) {

        return ResponseEntity.ok(dayPlanService.updateFulfilledStatus(scheduleId, dayPlanId));
    }

    @DeleteMapping("/day_plan/{day_plan_id}")
    public ResponseEntity<DeleteMessage> deleteDayPlan(@PathVariable("schedule_id") long scheduleId,
                                                       @PathVariable("day_plan_id") long dayPlanId) {

        return ResponseEntity.ok(new DeleteMessage(dayPlanService.deleteDayPlan(scheduleId, dayPlanId)));
    }
}
