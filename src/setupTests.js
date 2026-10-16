import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

// React Router 7 expects these globals, which CRA's jsdom doesn't provide.
Object.assign(global, { TextEncoder, TextDecoder });
