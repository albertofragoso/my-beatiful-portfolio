export interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
}

export interface Meteor {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  animationDuration: number;
}

export type SkillCategory = "frontend" | "backend" | "tools" | "all";

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
}

export type ToastActionType =
  | "ADD_TOAST"
  | "UPDATE_TOAST"
  | "DISMISS_TOAST"
  | "REMOVE_TOAST";

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface ToastState {
  toasts: Toast[];
}

export interface ToastAction {
  type: ToastActionType;
  toast?: Toast;
  toastId?: string;
}

export type ToastListener = (state: ToastState) => void;

export interface ToastReturn {
  id: string;
  dismiss: () => void;
  update: (props: Partial<Toast>) => void;
}

export interface UseToastReturn extends ToastState {
  toast: (props: Partial<Toast>) => ToastReturn;
  dismiss: (toastId?: string) => void;
}
