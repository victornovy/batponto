import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SettingsProvider } from '../../providers/settings/settings';

@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class SettingsPage implements OnInit {

    public settingsForm: FormGroup;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private fb: FormBuilder,
        private settingsProvider: SettingsProvider,
    ) { }

    ngOnInit() {
        this.settingsForm = this.fb.group({
            qtWorkHours: ['', Validators.required]
        });

        this.settingsProvider.getInfo()
            .subscribe((resp: any) => {
                this.settingsForm.setValue({
                    qtWorkHours: resp ? resp.qtWorkHours : "00:00"
                });
            });
    }

    saveSettings() {
        if (this.settingsForm.invalid) {
            return this.settingsForm.updateValueAndValidity();
        }

        this.settingsProvider.saveSettings(this.settingsForm.value.qtWorkHours);
        this.settingsForm.markAsUntouched();
    }
}
