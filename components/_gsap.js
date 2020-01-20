import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(Draggable, ScrollToPlugin, TextPlugin);

// No need to export ScrollToPlugin or TextPlugin
// as you probably won't need to reference them directly
export { gsap, Draggable };
