
        const ECOLI = {
            "comment" : " Most used codon for each amino acid for E.coli., Referenced on 29/06/2021 from : https://www.genscript.com/tools/codon-frequency-table",
        
                                "L" : "CTG", 
                                "F" : "TTT", 
                                "Y" : "TAT", 
                                "*" : "TAA", 
                                "H" : "CAT", 
                                "Q" : "CAG", 
                                "I" : "ATT",
                                "M" : "ATG",
                                "N" : "AAC",
                                "K" : "AAA",
                                "V" : "GTG",
                                "D" : "GAT",
                                "E" : "GAA",
                                "S" : "AGC",
                                "C" : "TGC",
                                "W" : "TGG",
                                "P" : "CCG",
                                "R" : "CGT",
                                "T" : "ACC",
                                "A" : "GCC",
                                "G" : "GGC"
        };
        
        const DROSOPHILA = { 
        
            "comment" : " Dictionary of the most used codon for each amino acid for D. melanogaster using data from NCBI Taxonomy 26/08/2021",
                
                                "L" : "CTG", 
                                "F" : "TTC", 
                                "Y" : "TAC", 
                                "*" : "TAA", 
                                "H" : "CAC", 
                                "Q" : "CAG", 
                                "I" : "ATC",
                                "M" : "ATG",
                                "N" : "AAC",
                                "K" : "AAG",
                                "V" : "GTG",
                                "D" : "GAC",
                                "E" : "GAG",
                                "S" : "TCC",
                                "C" : "TGC",
                                "W" : "TGG",
                                "P" : "CCC",
                                "R" : "CGC",
                                "T" : "ACC",
                                "A" : "GCC",
                                "G" : "GGC"
            };
        
        const MUSCULUS = { 
        
            "comment" : " Dictionary of the most used codon for each amino acid for Mus musculus using data from NCBI Taxonomy 26/08/2021",
                
                                "L" : "CTG", 
                                "F" : "TTC", 
                                "Y" : "TAC", 
                                "*" : "TGA", 
                                "H" : "CAC", 
                                "Q" : "CAG", 
                                "I" : "ATC",
                                "M" : "ATG",
                                "N" : "AAC",
                                "K" : "AAG",
                                "V" : "GTG",
                                "D" : "GAC",
                                "E" : "GAG",
                                "S" : "AGC",
                                "C" : "TGC",
                                "W" : "TGG",
                                "P" : "CCC",
                                "R" : "AGG",
                                "T" : "ACC",
                                "A" : "GCC",
                                "G" : "GGC"
            };
        
        const SAPIENS = { 
        
            "comment" : " Dictionary of the most used codon for each amino acid for Homo Sapiens using data from NCBI Taxonomy 26/08/2021",
                
                                "L" : "CTG", 
                                "F" : "TTC", 
                                "Y" : "TAC", 
                                "*" : "TGA", 
                                "H" : "CAC", 
                                "Q" : "CAG", 
                                "I" : "ATC",
                                "M" : "ATG",
                                "N" : "AAC",
                                "K" : "AAG",
                                "V" : "GTG",
                                "D" : "GAC",
                                "E" : "GAG",
                                "S" : "AGC",
                                "C" : "TGC",
                                "W" : "TGG",
                                "P" : "CCC",
                                "R" : "AGG",
                                "T" : "ACC",
                                "A" : "GCC",
                                "G" : "GGC"
            };    


        function translator() {

            const KEYS = ['A','C','D','E','F','G','H','I','K','L','M','N','P','Q','R','S','T','V','W','Y', '*'];

            var input = document.getElementById('txtInput').value;
            let dict_label = document.getElementById('codons').value;

            document.getElementById("txtWarnings").style.display = 'block';
            document.getElementById("txtOutput").style.display = 'block';


            if (input.length<1) {
                throw new Error('No Input!');
            }

            input = input.toUpperCase();
            input = input.replace(/\s/g, '');
            let codons = input.split("");

            for (var i = 0; i < codons.length; i++) {
            // checks if protein input matches keys
                var valid = KEYS.includes(codons[i]);
                if (!valid) {
                    document.getElementById("txtWarnings").innerHTML = 'Warning: Invalid Value!';
                    document.getElementById("txtOutput").innerHTML = '';
                    throw new Error('Invalid Value!');
                }
            };

            var TRANSDICT = {}

            if (dict_label == 'ECOLI') {
                TRANSDICT = ECOLI;
            }
            else if (dict_label == 'DROSOPHILA') {
                TRANSDICT = DROSOPHILA;
            }
            else if (dict_label == 'MUSCULUS') {
                TRANSDICT = MUSCULUS;
            }
            else if (dict_label == 'SAPIENS') {
                TRANSDICT = SAPIENS;
            };

            var output = []

            for (var i = 0; i < codons.length; i++) {
                output[i] = TRANSDICT[codons[i]]
            };

            output = output.join("");

            if (input.endsWith('*')) {
                document.getElementById("txtWarnings").style.display = 'none';
                document.getElementById("txtOutput").innerHTML = output;
            }
            else {
                document.getElementById("txtWarnings").innerHTML = 'Warning: No stop codon! \n';
                document.getElementById("txtOutput").innerHTML = output;
            };
    };