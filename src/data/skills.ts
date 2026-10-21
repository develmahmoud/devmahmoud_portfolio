import {
  Code2,
  Blocks,
  FileCode,
  Database,
  Github,
  Palette,
  Binary,
  Terminal,
} from 'lucide-react';
import type { Skill } from '../types/content';

export const skills: Skill[] = [
  { name: 'JavaScript', icon: Code2 },
  { name: 'React', icon: Blocks },
  { name: 'Node.js', icon: FileCode },
  { name: 'PHP', icon: Binary },
  { name: 'Python', icon: Terminal },
  { name: 'GitHub', icon: Github },
  { name: 'MySQL', icon: Database },
  { name: 'Tailwind CSS', icon: Palette },
];
