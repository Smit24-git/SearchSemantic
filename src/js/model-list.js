

export default function configureModelList() {
    const selectElement = document.getElementById('model-name');
    for(let model of model_list) {
        const option = document.createElement('option');
        option.setAttribute('value', model.key);
        option.innerText = model.value;
        selectElement?.appendChild(option)
    }
    if(selectElement?.children && selectElement.children.length > 0 ){
        const fchild = selectElement.children.item(0)
        fchild?.setAttribute('selected', 'selected')
    }
}




const model_list = [
    {
        "key": "TaylorAI/gte-tiny",
        "value": "TaylorAI/gte-tiny | 💾22.9Mb 📥1752 ❤️102"
    },
    {
        "key": "nomic-ai/nomic-embed-text-v1.5",
        "value": "nomic-ai/nomic-embed-text-v1.5 | 💾548MB | 138MB 📥6487601 ❤️252"
    },
    {
        "key": "Alibaba-NLP/gte-large-en-v1.5",
        "value": "Alibaba-NLP/gte-large-en-v1.5 | 💾1.75GB | 361MB | 873MB | 446MB | 387MB | 446MB | 446MB 📥1038888 ❤️116"
    },
    {
        "key": "mixedbread-ai/mxbai-embed-large-v1",
        "value": "mixedbread-ai/mxbai-embed-large-v1 | 💾1.34GB | 669MB | 337MB 📥1251460 ❤️395"
    },
    {
        "key": "jinaai/jina-embeddings-v2-base-zh",
        "value": "jinaai/jina-embeddings-v2-base-zh | 💾641MB | 321MB | 162MB 📥15757 ❤️135"
    },
    {
        "key": "Snowflake/snowflake-arctic-embed-m",
        "value": "Snowflake/snowflake-arctic-embed-m | 💾436MB | 144MB | 218MB | 110MB | 149MB | 110MB | 110MB 📥38632 ❤️102"
    },
    {
        "key": "jinaai/jina-embeddings-v2-base-code",
        "value": "jinaai/jina-embeddings-v2-base-code | 💾642MB | 321MB | 162MB 📥19763 ❤️35"
    },
    {
        "key": "WhereIsAI/UAE-Large-V1",
        "value": "WhereIsAI/UAE-Large-V1 | 💾1.34GB | 669MB | 337MB 📥651948 ❤️194"
    },
    {
        "key": "jinaai/jina-reranker-v1-turbo-en",
        "value": "jinaai/jina-reranker-v1-turbo-en | 💾151MB | 103MB | 75.8MB | 38.3MB | 104MB | 38.3MB | 38.3MB 📥9533 ❤️40"
    },
    {
        "key": "Alibaba-NLP/gte-base-en-v1.5",
        "value": "Alibaba-NLP/gte-base-en-v1.5 | 💾556MB | 167MB | 278MB | 147MB | 174MB | 147MB | 147MB 📥223934 ❤️23"
    },
    {
        "key": "Supabase/gte-small",
        "value": "Supabase/gte-small | 💾133MB | 66.7MB | 34MB 📥1599458 ❤️54"
    },
    {
        "key": "Snowflake/snowflake-arctic-embed-xs",
        "value": "Snowflake/snowflake-arctic-embed-xs | 💾90.4MB | 53.9MB | 45.3MB | 23MB | 54.6MB | 23MB | 23MB 📥32228 ❤️22"
    },
    {
        "key": "Xenova/all-MiniLM-L6-v2",
        "value": "Xenova/all-MiniLM-L6-v2 | 💾90.4MB | 45.3MB | 23MB | 23MB 📥112 ❤️42"
    },
    {
        "key": "Xenova/multilingual-e5-large",
        "value": "Xenova/multilingual-e5-large | 💾546kB | 1.12GB | 562MB 📥13 ❤️7"
    },
    {
        "key": "jinaai/jina-embeddings-v2-base-de",
        "value": "jinaai/jina-embeddings-v2-base-de | 💾641MB | 321MB | 162MB 📥24919 ❤️58"
    },
    {
        "key": "Xenova/colbertv2.0",
        "value": "Xenova/colbertv2.0 | 💾436MB | 218MB | 110MB 📥2 ❤️5"
    },
    {
        "key": "nomic-ai/nomic-embed-text-v1-unsupervised",
        "value": "nomic-ai/nomic-embed-text-v1-unsupervised | 💾548MB | 138MB 📥11051 ❤️10"
    },
    {
        "key": "nomic-ai/nomic-embed-text-v1",
        "value": "nomic-ai/nomic-embed-text-v1 | 💾548MB | 138MB 📥1470792 ❤️394"
    },
    {
        "key": "Xenova/bge-m3",
        "value": "Xenova/bge-m3 | 💾607kB | 1.13GB | 570MB 📥680 ❤️20"
    },
    {
        "key": "mixedbread-ai/mxbai-embed-2d-large-v1",
        "value": "mixedbread-ai/mxbai-embed-2d-large-v1 | 💾1.34GB | 669MB | 337MB 📥6873 ❤️32"
    },
    {
        "key": "Snowflake/snowflake-arctic-embed-m-long",
        "value": "Snowflake/snowflake-arctic-embed-m-long | 💾548MB | 158MB | 274MB | 138MB | 165MB | 138MB | 138MB 📥17826 ❤️28"
    },
    {
        "key": "Snowflake/snowflake-arctic-embed-s",
        "value": "Snowflake/snowflake-arctic-embed-s | 💾133MB | 60.1MB | 66.7MB | 34MB | 61.4MB | 34MB | 34MB 📥35466 ❤️11"
    },
    {
        "key": "Snowflake/snowflake-arctic-embed-l",
        "value": "Snowflake/snowflake-arctic-embed-l | 💾1.34GB | 299MB | 669MB | 337MB | 318MB | 337MB | 337MB 📥21274 ❤️73"
    },
    {
        "key": "jinaai/jina-reranker-v1-tiny-en",
        "value": "jinaai/jina-reranker-v1-tiny-en | 💾132MB | 99.9MB | 66.3MB | 33.4MB | 101MB | 33.4MB | 33.4MB 📥3492 ❤️11"
    },
    {
        "key": "Xenova/paraphrase-albert-small-v2",
        "value": "Xenova/paraphrase-albert-small-v2 | 💾44.6MB | 22.4MB | 39.7MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/paraphrase-albert-base-v2",
        "value": "Xenova/paraphrase-albert-base-v2 | 💾44.7MB | 22.7MB | 40MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/squeezebert-uncased",
        "value": "Xenova/squeezebert-uncased | 💾202MB | 101MB | 51.2MB 📥2 ❤️0"
    },
    {
        "key": "Xenova/squeezebert-mnli",
        "value": "Xenova/squeezebert-mnli | 💾202MB | 101MB | 51.3MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/all-distilroberta-v1",
        "value": "Xenova/all-distilroberta-v1 | 💾326MB | 163MB | 82.1MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/paraphrase-multilingual-MiniLM-L12-v2",
        "value": "Xenova/paraphrase-multilingual-MiniLM-L12-v2 | 💾470MB | 235MB | 118MB 📥2 ❤️8"
    },
    {
        "key": "Xenova/paraphrase-MiniLM-L6-v2",
        "value": "Xenova/paraphrase-MiniLM-L6-v2 | 💾90.4MB | 45.3MB | 23MB 📥7 ❤️0"
    },
    {
        "key": "Xenova/all-mpnet-base-v2",
        "value": "Xenova/all-mpnet-base-v2 | 💾436MB | 218MB | 110MB 📥8 ❤️1"
    },
    {
        "key": "Xenova/all-roberta-large-v1",
        "value": "Xenova/all-roberta-large-v1 | 💾1.42GB | 709MB | 357MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/bert-base-nli-mean-tokens",
        "value": "Xenova/bert-base-nli-mean-tokens | 💾436MB | 218MB | 110MB 📥4 ❤️0"
    },
    {
        "key": "Xenova/distilbert-base-nli-mean-tokens",
        "value": "Xenova/distilbert-base-nli-mean-tokens | 💾266MB | 133MB | 66.9MB 📥2 ❤️0"
    },
    {
        "key": "Xenova/distilbert-base-nli-stsb-mean-tokens",
        "value": "Xenova/distilbert-base-nli-stsb-mean-tokens | 💾266MB | 133MB | 66.9MB 📥2 ❤️0"
    },
    {
        "key": "Xenova/distiluse-base-multilingual-cased-v1",
        "value": "Xenova/distiluse-base-multilingual-cased-v1 | 💾539MB | 270MB | 135MB 📥66 ❤️0"
    },
    {
        "key": "Xenova/distiluse-base-multilingual-cased-v2",
        "value": "Xenova/distiluse-base-multilingual-cased-v2 | 💾539MB | 270MB | 135MB 📥5218 ❤️2"
    },
    {
        "key": "Xenova/msmarco-distilbert-base-v4",
        "value": "Xenova/msmarco-distilbert-base-v4 | 💾266MB | 133MB | 66.9MB 📥4 ❤️0"
    },
    {
        "key": "Xenova/multi-qa-MiniLM-L6-cos-v1",
        "value": "Xenova/multi-qa-MiniLM-L6-cos-v1 | 💾90.4MB | 45.3MB | 23MB 📥2 ❤️2"
    },
    {
        "key": "Xenova/multi-qa-distilbert-cos-v1",
        "value": "Xenova/multi-qa-distilbert-cos-v1 | 💾266MB | 133MB | 66.9MB 📥4 ❤️0"
    },
    {
        "key": "Xenova/multi-qa-mpnet-base-cos-v1",
        "value": "Xenova/multi-qa-mpnet-base-cos-v1 | 💾436MB | 218MB | 110MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/multi-qa-mpnet-base-dot-v1",
        "value": "Xenova/multi-qa-mpnet-base-dot-v1 | 💾436MB | 218MB | 110MB 📥2 ❤️1"
    },
    {
        "key": "Xenova/nli-mpnet-base-v2",
        "value": "Xenova/nli-mpnet-base-v2 | 💾436MB | 218MB | 110MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/paraphrase-MiniLM-L3-v2",
        "value": "Xenova/paraphrase-MiniLM-L3-v2 | 💾69MB | 34.6MB | 17.5MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/paraphrase-mpnet-base-v2",
        "value": "Xenova/paraphrase-mpnet-base-v2 | 💾436MB | 218MB | 110MB 📥0 ❤️0"
    },
    {
        "key": "Xenova/paraphrase-multilingual-mpnet-base-v2",
        "value": "Xenova/paraphrase-multilingual-mpnet-base-v2 | 💾1.11GB | 555MB | 279MB 📥1635 ❤️2"
    },
    {
        "key": "Xenova/xlm-r-100langs-bert-base-nli-stsb-mean-tokens",
        "value": "Xenova/xlm-r-100langs-bert-base-nli-stsb-mean-tokens | 💾1.11GB | 555MB | 279MB 📥2 ❤️0"
    },
    {
        "key": "Xenova/all-MiniLM-L12-v2",
        "value": "Xenova/all-MiniLM-L12-v2 | 💾133MB | 66.7MB | 34MB 📥2 ❤️3"
    },
    {
        "key": "Xenova/scibert_scivocab_uncased",
        "value": "Xenova/scibert_scivocab_uncased | 💾438MB | 219MB | 111MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/spanbert-large-cased",
        "value": "Xenova/spanbert-large-cased | 💾1.33GB | 666MB | 335MB 📥2 ❤️0"
    },
    {
        "key": "Xenova/spanbert-base-cased",
        "value": "Xenova/spanbert-base-cased | 💾431MB | 216MB | 109MB 📥2 ❤️0"
    },
    {
        "key": "sdan/simple-embeddings",
        "value": "sdan/simple-embeddings | 💾90.4MB | 23MB 📥7 ❤️0"
    },
    {
        "key": "Xenova/sentence_bert",
        "value": "Xenova/sentence_bert | 💾436MB | 218MB | 110MB 📥2 ❤️0"
    },
    {
        "key": "Xenova/e5-small-v2",
        "value": "Xenova/e5-small-v2 | 💾133MB | 66.7MB | 34MB 📥2 ❤️3"
    },
    {
        "key": "Xenova/SapBERT-from-PubMedBERT-fulltext",
        "value": "Xenova/SapBERT-from-PubMedBERT-fulltext | 💾436MB | 218MB | 110MB 📥4 ❤️0"
    },
    {
        "key": "Xenova/indobert-base-p1",
        "value": "Xenova/indobert-base-p1 | 💾496MB | 248MB | 125MB 📥0 ❤️0"
    },
    {
        "key": "Xenova/UMLSBert_ENG",
        "value": "Xenova/UMLSBert_ENG | 💾436MB | 218MB | 110MB 📥2 ❤️1"
    },
    {
        "key": "Xenova/rubert-base-cased",
        "value": "Xenova/rubert-base-cased | 💾709MB | 355MB | 178MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/kobert",
        "value": "Xenova/kobert | 💾367MB | 184MB | 92.8MB 📥2 ❤️0"
    },
    {
        "key": "Xenova/e5-small",
        "value": "Xenova/e5-small | 💾133MB | 66.7MB | 34MB 📥2 ❤️0"
    },
    {
        "key": "Xenova/e5-large",
        "value": "Xenova/e5-large | 💾1.34GB | 669MB | 337MB 📥2 ❤️0"
    },
    {
        "key": "Xenova/e5-large-v2",
        "value": "Xenova/e5-large-v2 | 💾1.34GB | 669MB | 337MB 📥3 ❤️5"
    },
    {
        "key": "Xenova/e5-base",
        "value": "Xenova/e5-base | 💾436MB | 218MB | 110MB 📥2 ❤️0"
    },
    {
        "key": "Xenova/e5-base-v2",
        "value": "Xenova/e5-base-v2 | 💾436MB | 218MB | 110MB 📥2 ❤️0"
    },
    {
        "key": "Xenova/multilingual-e5-base",
        "value": "Xenova/multilingual-e5-base | 💾1.11GB | 555MB | 279MB 📥2 ❤️2"
    },
    {
        "key": "Xenova/instructor-base",
        "value": "Xenova/instructor-base | 💾552MB | 552MB | 140MB | 139MB | 495MB | 125MB | 439MB | 110MB 📥15 ❤️0"
    },
    {
        "key": "Xenova/instructor-large",
        "value": "Xenova/instructor-large | 💾1.74GB | 1.74GB | 439MB | 438MB | 1.54GB | 388MB | 1.34GB | 337MB 📥8 ❤️1"
    },
    {
        "key": "Xenova/sentence-t5-large",
        "value": "Xenova/sentence-t5-large | 💾1.74GB | 1.74GB | 439MB | 438MB | 1.54GB | 388MB | 1.34GB | 337MB 📥7 ❤️0"
    },
    {
        "key": "Xenova/multilingual-e5-small",
        "value": "Xenova/multilingual-e5-small | 💾470MB | 235MB | 118MB 📥3 ❤️2"
    },
    {
        "key": "Xenova/mms-300m",
        "value": "Xenova/mms-300m | 💾1.26GB | 632MB | 318MB 📥8 ❤️0"
    },
    {
        "key": "Xenova/mms-1b",
        "value": "Xenova/mms-1b | 💾1.13MB | 1.93GB | 969MB 📥2 ❤️0"
    },
    {
        "key": "Supabase/e5-small-v2",
        "value": "Supabase/e5-small-v2 | 💾133MB | 66.7MB | 34MB 📥4 ❤️1"
    },
    {
        "key": "Supabase/all-MiniLM-L6-v2",
        "value": "Supabase/all-MiniLM-L6-v2 | 💾90.4MB | 45.3MB | 23MB 📥21 ❤️2"
    },
    {
        "key": "Xenova/gte-small",
        "value": "Xenova/gte-small | 💾133MB | 66.7MB | 34MB 📥4 ❤️12"
    },
    {
        "key": "Xenova/gte-base",
        "value": "Xenova/gte-base | 💾436MB | 218MB | 110MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/gte-large",
        "value": "Xenova/gte-large | 💾1.34GB | 669MB | 337MB 📥2 ❤️1"
    },
    {
        "key": "Xenova/bge-small-en",
        "value": "Xenova/bge-small-en | 💾133MB | 66.7MB | 34MB 📥2 ❤️0"
    },
    {
        "key": "Xenova/bge-base-en",
        "value": "Xenova/bge-base-en | 💾436MB | 218MB | 110MB 📥3 ❤️0"
    },
    {
        "key": "Xenova/bge-large-en",
        "value": "Xenova/bge-large-en | 💾1.34GB | 669MB | 337MB 📥2 ❤️0"
    },
    {
        "key": "ggrn/bge-small-en",
        "value": "ggrn/bge-small-en | 💾133MB | 66.7MB | 34MB 📥1 ❤️1"
    },
    {
        "key": "Supabase/bge-small-en",
        "value": "Supabase/bge-small-en | 💾133MB | 66.7MB | 34MB 📥2 ❤️1"
    },
    {
        "key": "Xenova/bge-base-zh",
        "value": "Xenova/bge-base-zh | 💾407MB | 204MB | 103MB 📥3 ❤️0"
    },
    {
        "key": "Xenova/bge-large-zh",
        "value": "Xenova/bge-large-zh | 💾1.3GB | 650MB | 327MB 📥2 ❤️0"
    },
    {
        "key": "Xenova/bge-large-zh-noinstruct",
        "value": "Xenova/bge-large-zh-noinstruct | 💾1.3GB | 650MB | 327MB 📥3 ❤️0"
    },
    {
        "key": "Xenova/bge-small-zh",
        "value": "Xenova/bge-small-zh | 💾94.9MB | 47.5MB | 24MB 📥3 ❤️1"
    },
    {
        "key": "Xenova/ClinicalBERT",
        "value": "Xenova/ClinicalBERT | 💾909MB | 455MB | 229MB 📥3 ❤️0"
    },
    {
        "key": "Xenova/LaBSE",
        "value": "Xenova/LaBSE | 💾1.88GB | 941MB | 472MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/wavlm-base",
        "value": "Xenova/wavlm-base | 💾378MB | 189MB | 95.4MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/wavlm-base-plus",
        "value": "Xenova/wavlm-base-plus | 💾378MB | 189MB | 95.4MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/wavlm-large",
        "value": "Xenova/wavlm-large | 💾1.26GB | 632MB | 318MB 📥1 ❤️1"
    },
    {
        "key": "Xenova/sentence-camembert-large",
        "value": "Xenova/sentence-camembert-large | 💾1.34GB | 672MB | 339MB 📥3 ❤️0"
    },
    {
        "key": "Xenova/herbert-base-cased",
        "value": "Xenova/herbert-base-cased | 💾496MB | 248MB | 125MB 📥3 ❤️0"
    },
    {
        "key": "Xenova/herbert-large-cased",
        "value": "Xenova/herbert-large-cased | 💾1.42GB | 709MB | 357MB 📥3 ❤️0"
    },
    {
        "key": "Xenova/bge-large-en-v1.5",
        "value": "Xenova/bge-large-en-v1.5 | 💾1.34GB | 669MB | 337MB 📥4407 ❤️4"
    },
    {
        "key": "Xenova/bge-base-en-v1.5",
        "value": "Xenova/bge-base-en-v1.5 | 💾436MB | 218MB | 110MB 📥5 ❤️6"
    },
    {
        "key": "Xenova/bge-small-en-v1.5",
        "value": "Xenova/bge-small-en-v1.5 | 💾133MB | 66.7MB | 34MB 📥2 ❤️8"
    },
    {
        "key": "Xenova/bge-large-zh-v1.5",
        "value": "Xenova/bge-large-zh-v1.5 | 💾1.3GB | 650MB | 327MB 📥7 ❤️3"
    },
    {
        "key": "Xenova/bge-base-zh-v1.5",
        "value": "Xenova/bge-base-zh-v1.5 | 💾407MB | 204MB | 103MB 📥1 ❤️1"
    },
    {
        "key": "Xenova/bge-small-zh-v1.5",
        "value": "Xenova/bge-small-zh-v1.5 | 💾94.9MB | 47.5MB | 24MB 📥2 ❤️1"
    },
    {
        "key": "leolee9086/text2vec-base-chinese",
        "value": "leolee9086/text2vec-base-chinese | 💾103MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/long-t5-encodec-tglobal-base",
        "value": "Xenova/long-t5-encodec-tglobal-base | 💾922MB | 463MB | 291MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/jina-embeddings-v2-small-en",
        "value": "Xenova/jina-embeddings-v2-small-en | 💾130MB | 65MB | 32.8MB 📥23044 ❤️1"
    },
    {
        "key": "Xenova/jina-embeddings-v2-base-en",
        "value": "Xenova/jina-embeddings-v2-base-en | 💾547MB | 274MB | 138MB 📥4846 ❤️7"
    },
    {
        "key": "do-me/jina-embeddings-v2-base-en",
        "value": "do-me/jina-embeddings-v2-base-en | 💾547MB 📥1 ❤️0"
    },
    {
        "key": "do-me/jina-embeddings-v2-small-en",
        "value": "do-me/jina-embeddings-v2-small-en | 💾130MB 📥1 ❤️0"
    },
    {
        "key": "ProsESportu/mpweb",
        "value": "ProsESportu/mpweb | 💾436MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/clap-htsat-unfused",
        "value": "Xenova/clap-htsat-unfused | 💾619MB | 312MB | 161MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/tiny-random-ClapModel",
        "value": "Xenova/tiny-random-ClapModel | 💾14.8MB | 9.3MB | 6.34MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/larger_clap_general",
        "value": "Xenova/larger_clap_general | 💾783MB | 395MB | 205MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/larger_clap_music_and_speech",
        "value": "Xenova/larger_clap_music_and_speech | 💾783MB | 395MB | 205MB 📥1 ❤️2"
    },
    {
        "key": "Xenova/conv-bert-base",
        "value": "Xenova/conv-bert-base | 💾423MB | 212MB | 107MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/conv-bert-medium-small",
        "value": "Xenova/conv-bert-medium-small | 💾70.4MB | 35.6MB | 18.6MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/electra-base-discriminator",
        "value": "Xenova/electra-base-discriminator | 💾436MB | 218MB | 110MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/conv-bert-small",
        "value": "Xenova/conv-bert-small | 💾53MB | 26.9MB | 14.1MB 📥2 ❤️0"
    },
    {
        "key": "Xenova/electra-small-discriminator",
        "value": "Xenova/electra-small-discriminator | 💾54.2MB | 27.3MB | 14.2MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/nucleotide-transformer-500m-human-ref",
        "value": "Xenova/nucleotide-transformer-500m-human-ref | 💾1.92GB | 958MB | 482MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/nucleotide-transformer-500m-1000g",
        "value": "Xenova/nucleotide-transformer-500m-1000g | 💾1.92GB | 958MB | 482MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/hubert-base-ls960",
        "value": "Xenova/hubert-base-ls960 | 💾378MB | 189MB | 95.6MB 📥2 ❤️0"
    },
    {
        "key": "Xenova/UAE-Large-V1",
        "value": "Xenova/UAE-Large-V1 | 💾1.34GB | 669MB | 337MB 📥2 ❤️2"
    },
    {
        "key": "Todai/robbert-2022-dutch-sentence-transformers-onnx",
        "value": "Todai/robbert-2022-dutch-sentence-transformers-onnx | 💾473MB | 119MB 📥3 ❤️0"
    },
    {
        "key": "odunola/UAE-Large-VI",
        "value": "odunola/UAE-Large-VI | 💾1.34GB | 337MB 📥8 ❤️0"
    },
    {
        "key": "Xenova/tiny-random-RoFormerModel",
        "value": "Xenova/tiny-random-RoFormerModel | 💾6.69MB | 3.47MB | 1.88MB 📥2 ❤️0"
    },
    {
        "key": "karrar-alwaili/UAE-Large-V1",
        "value": "karrar-alwaili/UAE-Large-V1 | 💾1.34GB | 337MB 📥2 ❤️0"
    },
    {
        "key": "Cohee/jina-embeddings-v2-base-en",
        "value": "Cohee/jina-embeddings-v2-base-en | 💾434MB | 217MB | 109MB 📥3 ❤️1"
    },
    {
        "key": "aurantium/clip-ViT-B-32-multilingual-v1",
        "value": "aurantium/clip-ViT-B-32-multilingual-v1 | 💾541MB | 136MB 📥1 ❤️1"
    },
    {
        "key": "Xenova/w2v-bert-2.0",
        "value": "Xenova/w2v-bert-2.0 | 💾988kB | 1.16GB | 586MB 📥2 ❤️0"
    },
    {
        "key": "Xenova/jina-embeddings-v2-base-zh",
        "value": "Xenova/jina-embeddings-v2-base-zh | 💾641MB | 321MB | 162MB 📥4 ❤️0"
    },
    {
        "key": "Xenova/jina-embeddings-v2-base-de",
        "value": "Xenova/jina-embeddings-v2-base-de | 💾641MB | 321MB | 162MB 📥4 ❤️3"
    },
    {
        "key": "Xenova/nomic-embed-text-v1",
        "value": "Xenova/nomic-embed-text-v1 | 💾548MB | 274MB | 138MB 📥2 ❤️0"
    },
    {
        "key": "Xenova/nomic-embed-text-v1-unsupervised",
        "value": "Xenova/nomic-embed-text-v1-unsupervised | 💾548MB | 274MB | 138MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/nomic-embed-text-v1-ablated",
        "value": "Xenova/nomic-embed-text-v1-ablated | 💾548MB | 274MB | 138MB 📥1 ❤️0"
    },
    {
        "key": "koxy-ai/gte-small",
        "value": "koxy-ai/gte-small | 💾133MB | 66.7MB | 34MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/tiny-random-ErnieModel",
        "value": "Xenova/tiny-random-ErnieModel | 💾450kB | 343kB | 316kB | 273kB | 348kB | 273kB | 273kB 📥1 ❤️0"
    },
    {
        "key": "Xenova/ernie-2.0-large-en",
        "value": "Xenova/ernie-2.0-large-en | 💾1.34GB | 299MB | 669MB | 337MB | 318MB | 337MB | 337MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/ernie-2.0-base-en",
        "value": "Xenova/ernie-2.0-base-en | 💾436MB | 144MB | 218MB | 110MB | 149MB | 110MB | 110MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/ernie-health-zh",
        "value": "Xenova/ernie-health-zh | 💾411MB | 120MB | 206MB | 104MB | 125MB | 104MB | 104MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/ernie-3.0-mini-zh",
        "value": "Xenova/ernie-3.0-mini-zh | 💾107MB | 70.9MB | 53.8MB | 27.2MB | 71.5MB | 27.2MB | 27.2MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/ernie-3.0-nano-zh",
        "value": "Xenova/ernie-3.0-nano-zh | 💾71.4MB | 55.3MB | 35.8MB | 18.1MB | 55.6MB | 18.1MB | 18.1MB 📥2 ❤️0"
    },
    {
        "key": "Xenova/ernie-3.0-micro-zh",
        "value": "Xenova/ernie-3.0-micro-zh | 💾93.1MB | 68.8MB | 46.6MB | 23.5MB | 69.2MB | 23.5MB | 23.5MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/ernie-gram-zh",
        "value": "Xenova/ernie-gram-zh | 💾397MB | 105MB | 199MB | 100MB | 111MB | 100MB | 100MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/text2vec-base-chinese-paraphrase",
        "value": "Xenova/text2vec-base-chinese-paraphrase | 💾470MB | 178MB | 235MB | 119MB | 183MB | 119MB | 119MB 📥1 ❤️1"
    },
    {
        "key": "Xenova/text2vec-base-chinese-sentence",
        "value": "Xenova/text2vec-base-chinese-sentence | 💾470MB | 178MB | 235MB | 119MB | 183MB | 119MB | 119MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/tiny-random-ErnieMModel",
        "value": "Xenova/tiny-random-ErnieMModel | 💾32.3MB | 32.2MB | 16.2MB | 8.23MB | 32.2MB | 8.23MB | 8.23MB 📥1 ❤️0"
    },
    {
        "key": "Xenova/GIST-small-Embedding-v0",
        "value": "Xenova/GIST-small-Embedding-v0 | 💾133MB | 60.1MB | 66.7MB | 34MB | 61.4MB | 34MB | 34MB 📥0 ❤️0"
    },
    {
        "key": "lightbird-ai/nomic",
        "value": "lightbird-ai/nomic | 💾548MB | 138MB 📥10 ❤️0"
    },
    {
        "key": "sirius422/multilingual-e5-large-onnx",
        "value": "sirius422/multilingual-e5-large-onnx | 💾546kB | 562MB 📥1 ❤️0"
    },
    {
        "key": "corto-ai/nomic-embed-text-v1",
        "value": "corto-ai/nomic-embed-text-v1 | 💾548MB | 138MB 📥9058 ❤️0"
    },
    {
        "key": "michaelfeil/jina-embeddings-v2-base-code",
        "value": "michaelfeil/jina-embeddings-v2-base-code | 💾642MB | 321MB | 162MB 📥22 ❤️0"
    },
    {
        "key": "bdx33/stella-mrl-large-zh-v3.5-1792d",
        "value": "bdx33/stella-mrl-large-zh-v3.5-1792d | 💾1.3GB | 327MB 📥2 ❤️0"
    },
    {
        "key": "aseovic/all-mpnet-base-v2",
        "value": "aseovic/all-mpnet-base-v2 | 💾436MB | 218MB | 110MB 📥0 ❤️0"
    },
    {
        "key": "onnx-community/decision-transformer-gym-hopper-expert",
        "value": "onnx-community/decision-transformer-gym-hopper-expert | 💾4.6MB 📥0 ❤️0"
    },
    {
        "key": "onnx-community/decision-transformer-gym-hopper-medium",
        "value": "onnx-community/decision-transformer-gym-hopper-medium | 💾4.6MB 📥0 ❤️0"
    },
    {
        "key": "onnx-community/decision-transformer-gym-hopper-medium-replay",
        "value": "onnx-community/decision-transformer-gym-hopper-medium-replay | 💾4.6MB 📥0 ❤️0"
    },
    {
        "key": "onnx-community/decision-transformer-gym-hopper-expert-new",
        "value": "onnx-community/decision-transformer-gym-hopper-expert-new | 💾4.6MB 📥0 ❤️0"
    },
    {
        "key": "onnx-community/decision-transformer-gym-halfcheetah-expert",
        "value": "onnx-community/decision-transformer-gym-halfcheetah-expert | 💾4.61MB 📥0 ❤️0"
    },
    {
        "key": "onnx-community/decision-transformer-gym-halfcheetah-medium",
        "value": "onnx-community/decision-transformer-gym-halfcheetah-medium | 💾4.61MB 📥0 ❤️0"
    },
    {
        "key": "onnx-community/decision-transformer-gym-halfcheetah-medium-replay",
        "value": "onnx-community/decision-transformer-gym-halfcheetah-medium-replay | 💾4.61MB 📥0 ❤️0"
    },
    {
        "key": "onnx-community/decision-transformer-gym-walker2d-expert",
        "value": "onnx-community/decision-transformer-gym-walker2d-expert | 💾4.61MB 📥0 ❤️0"
    },
    {
        "key": "onnx-community/decision-transformer-gym-walker2d-medium",
        "value": "onnx-community/decision-transformer-gym-walker2d-medium | 💾4.61MB 📥0 ❤️0"
    },
    {
        "key": "onnx-community/decision-transformer-gym-walker2d-medium-replay",
        "value": "onnx-community/decision-transformer-gym-walker2d-medium-replay | 💾4.61MB 📥0 ❤️0"
    }
];