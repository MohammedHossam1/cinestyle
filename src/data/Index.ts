import {
  Camera,
  Film,
  Music,
  Palette,
  Scissors,
  VideoIcon
} from "lucide-react";
import edit from "../assets/services/edit.jpg";
import event from "../assets/services/event.jpg";
import photography from "../assets/services/photography.jpg";
import podcast from "../assets/services/podcast.jpg";
import promo from "../assets/services/promo.jpg";
import social from "../assets/services/social.jpg";
import wedding from "../assets/services/wedding.jpeg";
import writing from "../assets/services/writing.jpg";

export const ServicesData = [
  {
    title: "services.productsPhotography",
    icon: Film,
    iconBgColor: "bg-primary-500/10",
    bgImage: photography
  },
  {
    title: "services.writingContent", 
    icon: VideoIcon,
    iconBgColor: "bg-secondary-500/10",
    bgImage: writing
  },
  {
    title: "services.promoVedios",
    icon: Camera,
    iconBgColor: "bg-accent-500/10",
    bgImage: promo
  },
  {
    title: "services.weddingVedios",
    icon: Scissors,
    iconBgColor: "bg-success-500/10",
    bgImage: wedding
  },
  {
    title: "services.socialMedia",
    icon: Music,
    iconBgColor: "bg-warning-500/10",
    bgImage: social
  },
  {
    title: "services.editing",
    icon: Palette,
    iconBgColor: "bg-error-500/10",
    bgImage: edit
  },
  {
    title: "services.eventCoverAge",
    icon: Palette,
    iconBgColor: "bg-error-500/10",
    bgImage: event
  },
  {
    title: "services.podcast",
    icon: Palette,
    iconBgColor: "bg-error-500/10",
      bgImage: podcast
  },
];