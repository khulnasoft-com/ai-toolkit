// @ts-nocheck
import type { LanguageModelUsage, EmbeddingModelUsage } from "ai-toolkit";

function recordUsage(usage: LanguageModelUsage) {
	console.log(usage);
}

function processEmbedding(usage: EmbeddingModelUsage) {
	console.log(usage);
}

const handler = (data: LanguageModelUsage) => {
	console.log(data);
};
