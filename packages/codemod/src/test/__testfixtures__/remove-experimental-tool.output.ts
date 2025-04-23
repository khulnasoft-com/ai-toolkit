// @ts-nocheck
import type { CoreTool } from "ai-toolkit";

interface Config {
	tool: CoreTool;
}

const myTool: CoreTool = {
	description: "test",
	parameters: {},
};
