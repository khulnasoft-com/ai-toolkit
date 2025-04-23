// @ts-nocheck
import type { TokenUsage, CompletionTokenUsage, EmbeddingTokenUsage } from "ai-toolkit";

function recordUsage(usage: TokenUsage) {
	console.log(usage);
}

function processEmbedding(usage: EmbeddingTokenUsage) {
	console.log(usage);
}

const handler = (data: CompletionTokenUsage) => {
	console.log(data);
};
