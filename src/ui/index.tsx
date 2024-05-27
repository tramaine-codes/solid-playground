/* @refresh reload */
import { render } from 'solid-js/web';
import { App } from './components/app/App';
import './index.css';

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const root = document.getElementById('root')!;
render(() => <App />, root);
