import { AppOptions, StableWorkerSource } from "./app_options";
import { open, getVC } from "./file_handler";

AppOptions.set("workerSrc", StableWorkerSource);

export { open, getVC, AppOptions };
