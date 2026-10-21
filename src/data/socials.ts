import { Github, Facebook, Linkedin, Instagram, Twitter, Mail } from 'lucide-react';
import { FaWhatsapp, FaDiscord } from 'react-icons/fa';
import type { SocialLink } from '../types/content';

export const socials: SocialLink[] = [
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/mahmoud.muhammadsani.9', showInHeader: true },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/mahmoud-muhammad-sani-680752223/', showInHeader: true },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/dev_el_mahmoud', showInHeader: true },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/dev_el_mahmoud', showInHeader: true },
  { name: 'Gmail', icon: Mail, url: 'mailto:sanimahmoud10@gmail.com', showInHeader: true },
  { name: 'GitHub', icon: Github, url: 'https://github.com/develmahmoud' },
  { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/+2348105003394' },
  { name: 'Discord', icon: FaDiscord, url: 'https://' },
];

const headerOrder = ['LinkedIn', 'Facebook', 'Instagram', 'Twitter', 'Gmail'];

export const headerSocials = headerOrder
  .map((name) => socials.find((social) => social.name === name))
  .filter((social): social is SocialLink => Boolean(social));
