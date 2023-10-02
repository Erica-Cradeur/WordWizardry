const Animals = {
    name: 'Animals',
    flashcards: [
        {
            id: 1,
            englishImage: 'https://images.unsplash.com/photo-1535979863199-3c77338429a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80',
            french: 'agneau/agnelle',
            phonetic: 'a.ɲo/ /a.ɲɛl',
        },
        {
            id: 2,
            englishImage: 'https://images.unsplash.com/photo-1602081114407-99c109e945c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: 'âne/ânesse',
            phonetic: 'ɑn/ /ɑ.nɛs',
        },
        {
            id: 3,
            englishImage: 'https://images.unsplash.com/photo-1575414914265-ebc9aa2637f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80',
            french: 'buffle / bufflonne',
            phonetic: 'byf.l/ /by.flon',
        },
        {
            id: 4,
            englishImage: 'https://images.unsplash.com/photo-1553983658-0d7afeb5c53f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: 'chameau/chamelle',
            phonetic: 'ʃa.mo/ /ʃa.mɛl',
        },
        {
            id: 5,
            englishImage: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80',
            french: 'chat/chatte',
            phonetic: 'ʃa/ /ʃat',
        },
        {
            id: 6,
            englishImage: 'https://images.unsplash.com/photo-1541941069698-4b5ca745d7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: 'chevreuil/chevrette',
            phonetic: 'ʃə.vʁœj/ /ʃə.vʁɛt',
        },
        {
            id: 7,
            englishImage: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: 'chien/chienne',
            phonetic: 'ʃjɛ̃/ /ʃjɛn',
        },
        {
            id: 8,
            englishImage: 'https://images.unsplash.com/photo-1603483080228-04f2313d9f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80',
            french: 'éléphant/éléphante',
            phonetic: 'e.le.fɑ̃/ /e.le.fɑ̃t',
        },
        {
            id: 9,
            englishImage: 'https://images.unsplash.com/photo-1531351761167-c1a0f1356c7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: 'faisan/faisane',
            phonetic: 'fɛ.zɑ̃/ /fɛ.zan',
        },
        {
            id: 10,
            englishImage: 'https://images.unsplash.com/photo-1568431477192-52bb13a55088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: 'hérisson/hérissonne',
            phonetic: 'e.ʁi.sɔ̃/ /e.ʁi.sɔn',
        },
        {
            id: 11,
            englishImage: 'https://images.unsplash.com/photo-1627835413089-a5424905fa7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
            french: 'héron/héronne',
            phonetic: 'e.ʁɔ̃/ /e.ʁɔn',
        },
        {
            id: 12,
            englishImage: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: 'lapin/lapine',
            phonetic: 'la.pɛ̃/ /la.pin',
        },
        {
            id: 13,
            englishImage: 'https://images.unsplash.com/photo-1618641662184-bafefb91a542?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80',
            french: 'lion/lionne',
            phonetic: 'ljɔ̃/ /ljɔn',
        },
        {
            id: 14,
            englishImage: 'https://images.unsplash.com/photo-1607350999170-b893fef057ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: 'loup/louve',
            phonetic: 'lu/ /luv',
        },
        {
            id: 109,
            englishImage: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: 'ours/ourse',
            phonetic: 'uʁ/ /uʁs',
        },
        {
            id: 15,
            englishImage: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=997&q=80',
            french: 'renard/renarde',
            phonetic: 'ʁə.naʁ/ /ʁə.naʁd',
        },
        {
            id: 16,
            englishImage: 'https://images.unsplash.com/photo-1536514900905-0d5511b9d489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: 'paon/paonne',
            phonetic: 'pɑ̃/ /pɑn',
        },
        {
            id: 17,
            englishImage: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80',
            french: 'tigre/tigresse',
            phonetic: 'tiɡʁ/ /tiɡʁɛs',
        },
        {
            id: 18,
            englishImage: 'https://images.unsplash.com/photo-1572800578930-fd1013b506c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: 'ours polaire/ourse polaire',
            phonetic: 'uʁ pɔ.lɛʁ/ /uʁs pɔ.lɛʁ',
        },
        {
            id: 19,
            englishImage: 'https://images.unsplash.com/photo-1517217759187-c28c5cbb51e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80',
            french: 'bélier/brebis',
            phonetic: 'be.lje/ /bʁə.bi',
        },
        {
            id: 20,
            englishImage: 'https://images.unsplash.com/photo-1550348579-959785e820f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: 'bouc/chèvre',
            phonetic: 'buk/ /ʃɛvʁ',
        },
        {
            id: 21,
            englishImage: 'https://images.unsplash.com/photo-1465153690352-10c1b29577f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80',
            french: 'canard/cane',
            phonetic: 'ka.naʁ/ /kan',
        },
        {
            id: 22,
            englishImage: 'https://images.unsplash.com/photo-1636915739119-1ef2fe0b87d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: 'cerf/biche',
            phonetic: 'sɛʁf/ /biʃ',
        },
        {
            id: 23,
            englishImage: 'https://images.unsplash.com/photo-1606107869722-d5cbadabe2f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: 'cheval/jument',
            phonetic: 'ʃə.val/ /ʒy.mɑ̃',
        },
        {
            id: 24,
            englishImage: 'https://images.unsplash.com/photo-1554740760-5db7aca3ec66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=970&q=80',
            french: 'coq/poule',
            phonetic: 'kɔk/ /pul',
        },
        {
            id: 25,
            englishImage: 'https://images.unsplash.com/photo-1617237718516-01b2c2ac5b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1090&q=80',
            french: 'dindon/dinde',
            phonetic: 'dɛ̃.dɔ̃/ /dɛ̃d',
        },{
            id: 26,
            englishImage: 'https://images.unsplash.com/photo-1569856350435-70d7f5ca8a3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
            french: 'jars/oie',
            phonetic: 'ʒaʁ/ /wa',
        },
        {
            id: 27,
            englishImage: 'https://images.unsplash.com/photo-1620695072356-6a0ef565eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
            french: 'porc/truie',
            phonetic: 'pɔʁk/ /tʁɥi',
        },
        {
            id: 28,
            englishImage: 'https://images.unsplash.com/photo-1611504262701-8a48422da4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=981&q=80',
            french: 'sanglier/laie',
            phonetic: 'sɑ̃.ɡli.e/ /lɛ',
        },
        {
            id: 29,
            englishImage: 'https://images.unsplash.com/photo-1516708274537-6f91e34ccaf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: 'singe/guenon',
            phonetic: 'sɛ̃ʒ/ /ɡɥ.nɔ̃',
        },
        {
            id: 30,
            englishImage: 'https://images.unsplash.com/photo-1595293842982-951cf26e7b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
            french: 'taureau/vache',
            phonetic: 'to.ʁo/ /vaʃ',
        },{
            id: 31,
            englishImage: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: '[le] aigle [mâle/femelle]',
            phonetic: 'ɛɡl',
        },

        {
            id: 32,
            englishImage: 'https://images.unsplash.com/photo-1563016115-85abfc230672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
            french: '[le] blaireau [mâle/femelle]',
            phonetic: 'blɛ.ʁo',
        },{
            id: 33,
            englishImage: 'https://images.unsplash.com/flagged/photo-1579384263269-bdd19ad1cb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=868&q=80',
            french: '[le] brochet [mâle/femelle]',
            phonetic: 'bʁɔ.ʃɛ',
        },
        {
            id: 34,
            englishImage: 'https://images.unsplash.com/photo-1602587557695-9fa83da489c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: '[le] cachalot [mâle/femelle]',
            phonetic: 'ka.ʃa.lo',
        },

        {
            id: 35,
            englishImage: 'https://images.unsplash.com/photo-1620694563886-c3a80ec55f41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: '[le] canari [mâle/femelle]',
            phonetic: 'ka.na.ʁi',
        },
        {
            id: 36,
            englishImage: 'https://images.unsplash.com/photo-1586439587092-bfe492d1b784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: '[le] castor [mâle/femelle]',
            phonetic: 'kas.tɔʁ',
        },

        {
            id: 37,
            englishImage: 'https://images.unsplash.com/photo-1611192711250-892c9df53d61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: '[le] cochon [mâle/femelle]',
            phonetic: 'kɔ.ʃɔ̃',
        },{
            id: 38,
            englishImage: 'https://images.unsplash.com/photo-1572608705929-0e245b6fa24d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: '[le] corbeau [mâle/femelle]',
            phonetic: 'kɔʁ.bo',
        },
        {
            id: 39,
            englishImage: 'https://images.unsplash.com/photo-1560726853-257e78b87eca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80',
            french: '[le] crapaud [mâle/femelle]',
            phonetic: 'kʁa.po',
        },

        {
            id: 40,
            englishImage: 'https://plus.unsplash.com/premium_photo-1661840399584-fa80b6a856ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80',
            french: '[le] crocodile [mâle/femelle]',
            phonetic: 'kʁɔ.di.l',
        },
        {
            id: 41,
            englishImage: 'https://plus.unsplash.com/premium_photo-1667338689832-d54fa2c39b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: '[le] cygne [mâle/femelle]',
            phonetic: 'siɲ',
        },
        {
            id: 42,
            englishImage: 'https://images.unsplash.com/photo-1547382442-d17c21625a44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: '[le] dauphin [mâle/femelle]',
            phonetic: 'do.fɛ̃',
        },
        {
            id: 43,
            englishImage: 'https://images.unsplash.com/photo-1545065942-3a37886535d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: '[le] dromadaire [mâle/femelle]',
            phonetic: 'dʁɔ.ma.dɛʁ',
        },
        {
            id: 44,
            englishImage: 'https://images.unsplash.com/photo-1537211261771-e525b9e4049b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=817&q=80',
            french: '[le] écureuil [mâle/femelle]',
            phonetic: 'e.ky.ʁœj',
        },
        {
            id: 45,
            englishImage: 'https://images.unsplash.com/photo-1533177243638-dd485701f717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
            french: '[le] escargot [mâle/femelle]',
            phonetic: 'ɛs.kaʁ.ɡo',
        },
        {
            id: 46,
            englishImage: 'https://plus.unsplash.com/premium_photo-1667672907115-b375c76ab50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80',
            french: '[le] faucon [mâle/femelle]',
            phonetic: 'fo.kɔ̃',
        },
        {
            id: 47,
            englishImage: 'https://plus.unsplash.com/premium_photo-1686232986066-df37c6972f57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: '[le] gorille [mâle/femelle]',
            phonetic: 'ɡɔ.ʁi',
        },{
            id: 48,
            englishImage: 'https://images.unsplash.com/photo-1538100951519-36a3de1136c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: '[le] guépard [mâle/femelle]',
            phonetic: 'ɡe.paʁ',
        },
        {
            id: 49,
            englishImage: 'https://images.unsplash.com/photo-1653934439684-b2efde28bf6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80',
            french: '[le] hanneton [mâle/femelle]',
            phonetic: 'a.nə.tɔ̃',
        },
        {
            id: 50,
            englishImage: 'https://images.unsplash.com/photo-1555677284-6a6f971638e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: '[le] hibou [mâle/femelle]',
            phonetic: 'i.bu',
        },
        {
            id: 51,
            englishImage: 'https://images.unsplash.com/photo-1607646710406-83d1fcfbbf94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=985&q=80',
            french: '[le] hippocampe [mâle/femelle]',
            phonetic: 'i.po.kɑ̃p',
        },
        {
            id: 52,
            englishImage: 'https://images.unsplash.com/photo-1619535211143-8e209a7b662c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: '[le] hippopotame [mâle/femelle]',
            phonetic: 'i.po.po.tam',
        },
        {
            id: 53,
            englishImage: 'https://images.unsplash.com/photo-1520302518758-2c89d092abde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=998&q=80',
            french: '[le] homard [mâle/femelle]',
            phonetic: 'ɔ.maʁ',
        },
        {
            id: 54,
            englishImage: 'https://www.zurich.com/-/media/project/zurich/dotcom/media/magazine/2021/images/teaser-social-how-endangered-jaguars-returned-to-brazils-ghost-forest.jpg?rev=ed634138b7d944b8a760d8e977d29a23',
            french: '[le] jaguar [mâle/femelle]',
            phonetic: 'ʒa.ɡwaʁ',
        },
        {
            id: 55,
            englishImage: 'https://images.unsplash.com/photo-1606925088815-5309dea80a31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
            french: '[le] kangourou [mâle/femelle]',
            phonetic: 'kɑ̃.ɡu.ʁu',
        },
        {
            id: 56,
            englishImage: 'https://images.unsplash.com/photo-1519562990232-845beca99938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: '[le] koala [mâle/femelle]',
            phonetic: 'ko.a.la',
        },
        {
            id: 57,
            englishImage: 'https://images.unsplash.com/photo-1572297982753-48c028401d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
            french: '[le] lama [mâle/femelle]',
            phonetic: 'la.ma',
        },{
            id: 58,
            englishImage: 'https://www.treehugger.com/thmb/glS7N05QF96T56QwiNHa1fY65d0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-160869327-57f871694a4a4d69b2503f311cf31fbc.jpg',
            french: '[le] léopard [mâle/femelle]',
            phonetic: 'le.o.paʁ',
        },
        {
            id: 59,
            englishImage: 'https://www.nps.gov/colm/learn/nature/images/IMG_8708_1.JPG',
            french: '[le] lézard [mâle/femelle]',
            phonetic: 'le.zaʁ',
        },
        {
            id: 60,
            englishImage: 'https://images.unsplash.com/photo-1552833172-fd5ac167c18c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: '[le] lynx [mâle/femelle]',
            phonetic: 'liŋks',
        },
        {
            id: 62,
            englishImage: 'https://images.unsplash.com/photo-1606567595334-d39972c85dbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: '[le] oiseau [mâle/femelle]',
            phonetic: 'waz.o',
        },
        {
            id: 63,
            englishImage: 'https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: '[le] panda [mâle/femelle]',
            phonetic: 'pɑ̃.da',
        },
        {
            id: 64,
            englishImage: 'https://images.unsplash.com/photo-1500350347612-85b7eff2f759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=826&q=80',
            french: '[le] papillon [mâle/femelle]',
            phonetic: 'pa.pi.jɔ̃',
        },
        {
            id: 65,
            englishImage: 'https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: '[le] perroquet [mâle/femelle]',
            phonetic: 'pɛ.ʁɔ.kɛ',
        },{
            id: 66,
            englishImage: 'https://images.unsplash.com/photo-1618075254460-429d47b887c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
            french: '[le] phoque [mâle/femelle]',
            phonetic: 'fɔk',
        },
        {
            id: 67,
            englishImage: 'https://images.unsplash.com/photo-1534695941753-73cf13435eb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: '[le] pigeon [mâle/femelle]',
            phonetic: 'pi.ʒɔ̃',
        },
        {
            id: 68,
            englishImage: 'https://images.unsplash.com/photo-1581486179957-f7c9fb3a0050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: '[le] pingouin [mâle/femelle]',
            phonetic: 'pɛ̃.ɡwɛ̃',
        },
        {
            id: 69,
            englishImage: 'https://images.unsplash.com/photo-1637380781238-9b703b0d2db0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
            french: '[le] requin [mâle/femelle]',
            phonetic: 'ʁə.kɛ̃',
        },
        {
            id: 70,
            englishImage: 'https://images.unsplash.com/flagged/photo-1557650454-65194af63bf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
            french: '[le] rhinocéros [mâle/femelle]',
            phonetic: 'ʁi.nɔ.se.ʁɔs',
        },
        {
            id: 71,
            englishImage: 'https://images.unsplash.com/photo-1616459943793-f4fca51b6647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1041&q=80',
            french: '[le] saumon [mâle/femelle]',
            phonetic: 'so.mɔ̃',
        },
        {
            id: 72,
            englishImage: 'https://images.unsplash.com/photo-1586794790833-54629d1c3f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
            french: '[le] scorpion [mâle/femelle]',
            phonetic: 'skɔ.ʁjɔ̃',
        },
        {
            id: 73,
            englishImage: 'https://images.unsplash.com/photo-1571391733814-15ac29ac3544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80',
            french: '[le] serpent [mâle/femelle]',
            phonetic: 'sɛʁ.pɑ̃',
        },
        {
            id: 74,
            englishImage: 'https://images.unsplash.com/photo-1588343786331-24057af1fcfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: '[le] vautour [mâle/femelle]',
            phonetic: 'vo.tuʁ',
        },
        {
            id: 75,
            englishImage: 'https://images.unsplash.com/photo-1526319238109-524eecb9b913?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=824&q=80',
            french: '[le] zèbre [mâle/femelle]',
            phonetic: 'zɛbʁ',
        },
        {
            id: 76,
            englishImage: 'https://images.unsplash.com/photo-1497322313607-9fa0c2c4c4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80',
            french: '[la] abeille [mâle/femelle]',
            phonetic: 'a.bɛj',
        },
        {
            id: 77,
            englishImage: 'https://plus.unsplash.com/premium_photo-1669725687151-009d3409384c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
            french: '[la] autruche [mâle/femelle]',
            phonetic: 'o.tʁuʃ',
        },
        {
            id: 78,
            englishImage: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80',
            french: '[la] baleine [mâle/femelle]',
            phonetic: 'ba.lɛn',
        },
        {
            id: 79,
            englishImage: 'https://images.unsplash.com/photo-1609865073816-1bd0cd0e251e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
            french: '[la] chauve-souris [mâle/femelle]',
            phonetic: 'ʃov.su.ʁi',
        },
        {
            id: 80,
            englishImage: 'https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: '[la] chouquette [mâle/femelle]',
            phonetic: 'ʃu.kɛt',
        },
        {
            id: 81,
            englishImage: 'https://images.unsplash.com/photo-1620713600038-e86cb94d7a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: '[la] cigale [mâle/femelle]',
            phonetic: 'si.ɡal',
        },
        {
            id: 82,
            englishImage: 'https://images.unsplash.com/photo-1524055036205-019a5cc2a1b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
            french: '[la] cigogne [mâle/femelle]',
            phonetic: 'si.ɡɔɲ',
        },
        {
            id: 83,
            englishImage: 'https://images.unsplash.com/photo-1507126882445-434b04530d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: '[la] colombe [mâle/femelle]',
            phonetic: 'ko.lɔ̃b',
        },
        {
            id: 84,
            englishImage: 'https://media.istockphoto.com/id/507123014/photo/crystal-red-shrimp.jpg?s=612x612&w=0&k=20&c=Gogzlhsc-tLExVZ29NFiu3uRwraotUxdCxJsFc78v1U=',
            french: '[la] crevette [mâle/femelle]',
            phonetic: 'kʁə.vɛt',
        },
        {
            id: 85,
            englishImage: 'https://images.unsplash.com/photo-1611748939902-060e1ae99f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=814&q=80',
            french: '[la] fourmi [mâle/femelle]',
            phonetic: 'fuʁ.mi',
        },
        {
            id: 86,
            englishImage: 'https://images.unsplash.com/photo-1504296601235-4d6bb2f25320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=992&q=80',
            french: '[la] gazelle [mâle/femelle]',
            phonetic: 'ɡa.zɛl',
        },
        {
            id: 87,
            englishImage: 'https://images.unsplash.com/photo-1626548307930-deac221f87d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=834&q=80',
            french: '[la] girafe [mâle/femelle]',
            phonetic: 'ʒi.ʁaf',
        },
        {
            id: 88,
            englishImage: 'https://images.unsplash.com/photo-1579380656108-f98e4df8ea62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: '[la] grenouille [mâle/femelle]',
            phonetic: 'ɡʁə.nuj',
        },
        {
            id: 89,
            englishImage: 'https://a-z-animals.com/media/2021/07/Thrush-header.jpg',
            french: '[la] grive [mâle/femelle]',
            phonetic: 'ɡʁiv',
        },
        {
            id: 90,
            englishImage: 'https://images.unsplash.com/photo-1568039849305-ff62a3cb3196?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: '[la] guêpe [mâle/femelle]',
            phonetic: 'ɡɛp',
        },
        {
            id: 91,
            englishImage: 'https://images.unsplash.com/photo-1444465146604-4fe67bfac6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
            french: '[la] hirondelle [mâle/femelle]',
            phonetic: 'i.ʁɔ̃.dɛl',
        },
        {
            id: 92,
            englishImage: 'https://images.unsplash.com/photo-1630269130296-ac4b052d75ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80',
            french: '[la] huître [mâle/femelle]',
            phonetic: 'ɥitʁ',
        },
        {
            id: 93,
            englishImage: 'https://images.unsplash.com/photo-1497329609842-8f18bde0ec5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=979&q=80',
            french: '[la] libellule [mâle/femelle]',
            phonetic: 'li.bɛ.lyl',
        },
        {
            id: 94,
            englishImage: 'https://images.unsplash.com/photo-1633967920376-33b2d94f091f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: '[la] loutre [mâle/femelle]',
            phonetic: 'lutʁ',
        },
        {
            id: 95,
            englishImage: 'https://images.unsplash.com/photo-1516682875804-d707ef367ad8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=820&q=80',
            french: '[la] mante religieuse [mâle/femelle]',
            phonetic: 'mɑ̃t ʁə.li.ʒjøz',
        },
        {
            id: 96,
            englishImage: 'https://images.unsplash.com/photo-1500519082938-cdd6b2f39de6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: '[la] marmotte [mâle/femelle]',
            phonetic: 'maʁ.mɔt',
        },
        {
            id: 97,
            englishImage: 'https://images.unsplash.com/photo-1495012379376-194a416fcc5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=850&q=80',
            french: '[la] méduse [mâle/femelle]',
            phonetic: 'me.dy.z',
        },
        {
            id: 98,
            englishImage: 'https://images.unsplash.com/photo-1568689341045-c58407fee7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1097&q=80',
            french: '[la] mouche [mâle/femelle]',
            phonetic: 'muʃ',
        },
        {
            id: 99,
            englishImage: 'https://images.unsplash.com/photo-1574105079640-5b3ebd6fb7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
            french: '[la] mouette [mâle/femelle]',
            phonetic: 'muɛt',
        },
        {
            id: 100,
            englishImage: 'https://images.unsplash.com/photo-1557692538-9564c4b2cd13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80',
            french: '[la] panthère [mâle/femelle]',
            phonetic: 'pɑ̃.tɛʁ',
        },
        {
            id: 101,
            englishImage: 'https://lafeber.com/pet-birds/wp-content/uploads/2018/06/Parakeet.jpg',
            french: '[la] perruche [mâle/femelle]',
            phonetic: 'pɛ.ʁuʃ',
        },
        {
            id: 102,
            englishImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Pica_pica_-_Compans_Caffarelli_-_2012-03-16.jpg/1200px-Pica_pica_-_Compans_Caffarelli_-_2012-03-16.jpg',
            french: '[la] pie [mâle/femelle]',
            phonetic: 'pi',
        },
        {
            id: 103,
            englishImage: 'https://images.unsplash.com/photo-1606118858477-9a8f9dfb257a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1081&q=80',
            french: '[la] souris [mâle/femelle]',
            phonetic: 'su.ʁi',
        },
        {
            id: 104,
            englishImage: 'https://images.unsplash.com/photo-1503835227138-d7e43a18c79f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: '[la] taupe [mâle/femelle]',
            phonetic: 'top',
        },
        {
            id: 105,
            englishImage: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80',
            french: '[la] tortue [mâle/femelle]',
            phonetic: 'tɔʁ.ty',
        },
        {
            id: 106,
            englishImage: 'https://images.unsplash.com/photo-1577541159763-20f70f1de13d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
            french: '[la] tourterelle [mâle/femelle]',
            phonetic: 'tuʁ.tə.ʁɛl',
        },
        {
            id: 107,
            englishImage: 'https://images.unsplash.com/photo-1576468959551-414423712a5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            french: '[la] truite [mâle/femelle]',
            phonetic: 'tʁɥit',
        },
        {
            id: 108,
            englishImage: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Large-scaled_pitvitper-Closeup.jpg',
            french: '[la] vipère [mâle/femelle]',
            phonetic: 'vi.pɛʁ',
        },

],
};

export default Animals;