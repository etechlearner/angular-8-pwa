import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, ApplicationRef } from "@angular/core";
import { PwaService } from "../Services/Pwa.service";
import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    animateChild
  } from '@angular/animations';
@Component({
    selector: 'app-splash-screen',
    template: `
        <div class="splash-screen" *ngIf="show" @fadeOut>
             // Your custom splash screen design
        </div>
    `,
    animations: [
        // the fade-in/fade-out animation.
        trigger('fadeOut', [
            transition(':leave', [
                query(':leave', animateChild(), {optional: true}),
                animate(300, style({opacity: 0}))
            ]),
        ]),
    ],
    styles: [`
        .splash-screen {
            backgroud-color: black;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 9999;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplashScreenComponent implements OnInit {
    show = false;

    constructor(
        private pwaService: PwaService,
        private cdr: ChangeDetectorRef,
        private appRef: ApplicationRef,
    ) {
    }

    ngOnInit() {

        this.pwaService.checkForUpdate()
            .subscribe(result => {
                alert('ok');
                this.show = result;
                this.cdr.detectChanges();
            });
    }
}