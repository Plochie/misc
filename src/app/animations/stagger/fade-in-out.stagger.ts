import { trigger, transition, stagger, animate, style, query } from '@angular/animations';


export function staggerFadeInOut(staggerTime: string, animTime: string) {

    return trigger('staggerFadeInOut', [
        transition('* => *', [
            // each time the binding value changes
            query(':leave', [
                stagger(staggerTime, [
                    animate(animTime, style({ opacity: 0 }))
                ])
            ], { optional: true }),
            query(':enter', [
                style({ opacity: 0 }),
                stagger(staggerTime, [
                    animate(animTime, style({ opacity: 1 }))
                ])
            ], { optional: true })
        ])
    ]);
};
