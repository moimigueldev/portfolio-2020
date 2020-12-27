import { ElementRef } from '@angular/core';

export interface Props {
    introContainerHeight?: number;
    skillsContainerHeight?: number;
}

export interface Heights {
    intro?: number;
    skills?: number;
    experiance?: number;
    projects?: number;
}

export interface NativeElements {
    desktopMenu?: ElementRef;
}
