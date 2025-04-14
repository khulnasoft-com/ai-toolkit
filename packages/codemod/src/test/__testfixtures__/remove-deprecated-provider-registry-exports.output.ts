// @ts-nocheck
import { type Provider, experimental_createProviderRegistry } from "ai-toolkit";

function createProvider(): Provider {
	return {
		languageModel: () => null,
		textEmbeddingModel: () => null,
	};
}

function createRegistry(): Provider {
	return experimental_createProviderRegistry({
		test: createProvider(),
	});
}

const registry: Provider = createRegistry();
