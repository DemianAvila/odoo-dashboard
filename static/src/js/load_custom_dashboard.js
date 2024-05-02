/** @odoo-module  **/
import { registry } from "@web/core/registry";
import { Component, useState } from  "@odoo/owl";
import { AddFilter } from "./components/buttons/add_filter";
import { SelectFilter } from "./components/selector/select_filter";
const actionRegistry = registry.category("actions");

export class DashboardComponent extends Component {
    static components = {
        AddFilter,
        SelectFilter
    }
    setup() {
        this.filters=useState([]);
    }

    addFilter(){
        this.filters.push({id: this.filters.length+1});
        console.log(this.filters);
    }
    
}

DashboardComponent.template = "inntegra_dashboard.dashboard_component";

actionRegistry.add("inntegra_dashboard_overrride", DashboardComponent);