import { AppOptions, StableWorkerSource } from "./app_options.js";
import { open } from "./file_handler.js";

AppOptions.set("workerSrc", StableWorkerSource);

export { open };
