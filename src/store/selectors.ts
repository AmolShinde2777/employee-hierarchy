import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./index"
import { buildEmployeeTree } from "../utils/buildEmployeeTree";

export const selectEmployees = (state: RootState) =>
    state.employees.employees;

export const selectEmployeeTree = createSelector(
    [selectEmployees],
    employees => buildEmployeeTree(employees)
);
