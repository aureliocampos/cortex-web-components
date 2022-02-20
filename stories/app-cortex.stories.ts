import { html, TemplateResult } from 'lit';
import '../src/app-cortex.js';

export default {
  title: 'AppCortex',
  component: 'app-cortex',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <app-cortex style="--app-cortex-background-color: ${backgroundColor}" .title=${title}></app-cortex>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
