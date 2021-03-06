package com.pk.ms.controllers.year;

import com.pk.ms.dto.year.YearPlanInputDTO;
import com.pk.ms.entities.DeleteMessage;
import com.pk.ms.entities.year.YearPlan;
import com.pk.ms.services.year.YearPlanService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@PreAuthorize("hasRole('ROLE_ADMIN') or authentication.principal.id == #scheduleId")
@RequestMapping("/schedule/{schedule_id}")
public class YearPlanController {

    private final YearPlanService yearPlanService;

    public YearPlanController(YearPlanService yearPlanService) {
        this.yearPlanService = yearPlanService;
    }

    @GetMapping(value = "/year/{year_id}/year_plans")
    public ResponseEntity<List<YearPlan>> getYearPlans(@PathVariable("schedule_id") long scheduleId,
                                                       @PathVariable("year_id") long yearId) {
        return ResponseEntity.ok(yearPlanService.getYearPlansByScheduleIdAndYearId(scheduleId, yearId));
    }

    @GetMapping(value = "/year_plans/{year_plan_id}")
    public ResponseEntity<YearPlan> getYearPlan(@PathVariable("schedule_id") long scheduleId,
                                                @PathVariable("year_plan_id") long yearPlanId) {
        return ResponseEntity.ok(yearPlanService.getYearPlan(scheduleId, yearPlanId));
    }

    @PostMapping(value="/year/{year_id}/year_plan", consumes = "application/json")
    public ResponseEntity<YearPlan> createYearPlan(@PathVariable("schedule_id") long scheduleId,
                                                   @PathVariable("year_id") long yearId,
                                                   @Valid @RequestBody YearPlanInputDTO yearPlanInputDTO) {

        return ResponseEntity.ok(yearPlanService.createYearPlan(scheduleId, yearId, yearPlanInputDTO));
    }

    @PatchMapping(value="/year_plan/{year_plan_id}", consumes = "application/json")
    public ResponseEntity<YearPlan> updateYearPlan(@PathVariable("schedule_id") long scheduleId,
                                                   @PathVariable("year_plan_id") long yearPlanId,
                                                   @Valid @RequestBody YearPlanInputDTO yearPlanInputDTO) {

        return ResponseEntity.ok(yearPlanService.updateYearPlan(scheduleId, yearPlanId, yearPlanInputDTO));
    }

    @PatchMapping("/year_plan/{year_plan_id}/fulfilled")
    public ResponseEntity<YearPlan> updateFulfilledStatus(@PathVariable("schedule_id") long scheduleId,
                                                          @PathVariable("year_plan_id") long yearPlanId) {

        return ResponseEntity.ok(yearPlanService.updateFulfilledStatus(scheduleId, yearPlanId));
    }

    @DeleteMapping("/year_plan/{year_plan_id}")
    public ResponseEntity<DeleteMessage> deleteYearPlan(@PathVariable("schedule_id") long scheduleId,
                                                        @PathVariable("year_plan_id") long yearPlanId) {

        return ResponseEntity.ok(new DeleteMessage(yearPlanService.deleteYearPlan(scheduleId, yearPlanId)));
    }

}
