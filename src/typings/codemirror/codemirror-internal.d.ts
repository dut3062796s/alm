// Type definitions for CodeMirror
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: basarat <https://github.com/basarat>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module CodeMirror {
    /** @internal Utility function inside code mirror to stop events */
    function e_stop(event:any);

    interface SearchCursor {
    }
}

/** Our extension to code mirror config. We like to keep the filePath in there */
declare module CodeMirror {
    interface EditorConfiguration {
        filePath: string;
    }
}
