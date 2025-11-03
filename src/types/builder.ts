export interface ComponentProps {
  [key: string]: string | number | boolean | null | undefined | object;
}

export interface ComponentMeta {
  name: string;
  label: string;
  category: string;
  id?: number;
}

export interface BuilderComponent {
  id: string | number;
  type: string;
  props: ComponentProps;
}
