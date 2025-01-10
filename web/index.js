import { AppOptions, StableWorkerSource } from "./app_options.js";
import { open, getVC } from "./file_handler.js";

AppOptions.set("workerSrc", StableWorkerSource);

export { open, getVC, AppOptions };
