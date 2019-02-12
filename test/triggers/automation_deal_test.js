const plg = require('pluga-plg');
const expect = require('chai').expect;

const trigger = require('../../lib/triggers/automation_deal');

describe('Trigger: Automation Deal', function () {
    it('Should returns a deal', function(done) {
        const event = {
            meta: {
                baseURI: process.env.BASE_URI,
            },
            auth: {
                access_token: process.env.ACCESS_TOKEN
            },
            payload: {
                "id": "210093",
                "title": "teste 2",
                "created_at": "2018-12-14",
                "closed_at": null,
                "probably_closed_at": null,
                "last_contact": "2019-02-01 17:10:42",
                "description": null,
                "observation": null,
                "status": "0",
                "deleted": "0",
                "freezed": "0",
                "value": "101699.90",
                "value_mrr": "1000.00",
                "hash": "cv0x71kt6866gzl0jx5fwfx53y98c3z",
                "order": "0",
                "company": {
                    "id": "208465",
                    "name": "Nome não informado",
                    "cnpj": null,
                    "observation": null,
                    "website": null,
                    "open_at": null,
                    "created_at": "2019-02-01 17:51:02",
                    "address_postal_code": null,
                    "address_street": null,
                    "address_number": null,
                    "address_complement": null,
                    "district": null,
                    "company_name": null,
                    "email_nf": null,
                    "ie": null,
                    "logo": null,
                    "hash": "c6b1unhzijlxza2jgcvd11nljrsisrx",
                    "country": null,
                    "city": {
                        "id": null,
                        "name": null
                    },
                    "segment": {
                        "id": null,
                        "name": null
                    },
                    "user": {
                        "id": null,
                        "name": null
                    },
                    "contact_emails": [],
                    "contact_phones": [],
                    "fields": [
                        {
                            "id": "2940",
                            "nome": "Campo 2",
                            "valor": null,
                            "tipo": "1",
                            "valores": "[]"
                        },
                        {
                            "id": "2941",
                            "nome": "Campo 3",
                            "valor": null,
                            "tipo": "1",
                            "valores": "[]"
                        },
                        {
                            "id": "2943",
                            "nome": "Origem",
                            "valor": null,
                            "tipo": "1",
                            "valores": "[]"
                        },
                        {
                            "id": "2944",
                            "nome": "Vendedor X",
                            "valor": null,
                            "tipo": "1",
                            "valores": "[]"
                        },
                        {
                            "id": "2957",
                            "nome": "Campo Customizado 1",
                            "valor": null,
                            "tipo": "1",
                            "valores": null
                        },
                        {
                            "id": "2958",
                            "nome": "Campo Customizado 2",
                            "valor": null,
                            "tipo": "1",
                            "valores": null
                        },
                        {
                            "id": "2978",
                            "nome": "Campo de Empresa",
                            "valor": null,
                            "tipo": "1",
                            "valores": "\"\""
                        },
                        {
                            "id": "3035",
                            "nome": "PAÍS",
                            "valor": null,
                            "tipo": "1",
                            "valores": null
                        },
                        {
                            "id": "3036",
                            "nome": "CONTINENTE",
                            "valor": null,
                            "tipo": "1",
                            "valores": null
                        },
                        {
                            "id": "3037",
                            "nome": "MOEDA",
                            "valor": null,
                            "tipo": "1",
                            "valores": null
                        },
                        {
                            "id": "3038",
                            "nome": "TARGET SELL SIDE",
                            "valor": null,
                            "tipo": "1",
                            "valores": null
                        },
                        {
                            "id": "3039",
                            "nome": "RECEITA",
                            "valor": null,
                            "tipo": "1",
                            "valores": null
                        },
                        {
                            "id": "3040",
                            "nome": "SEGMENTO II",
                            "valor": null,
                            "tipo": "1",
                            "valores": null
                        },
                        {
                            "id": "3041",
                            "nome": "Investidor presente no Brasil? ",
                            "valor": null,
                            "tipo": "1",
                            "valores": null
                        },
                        {
                            "id": "3043",
                            "nome": "Segmento [Multiplo]",
                            "valor": null,
                            "tipo": "6",
                            "valores": "[\"Seg1\",\"Seg2\",\"Seg3\"]"
                        }
                    ],
                    "cnaes": []
                },
                "person": {
                    "id": "430005",
                    "name": "Lorem Person",
                    "email": null,
                    "job_title": "CARGO",
                    "cpf": null,
                    "rdstation": null,
                    "city": {
                        "id": null,
                        "name": null
                    },
                    "company": {
                        "id": null,
                        "name": null
                    },
                    "contact_emails": [
                        {
                            "id": "389662",
                            "address": "lorem@lorem.com"
                        }
                    ],
                    "contact_phones": [
                        {
                            "id": "525660",
                            "number": "555581409027"
                        }
                    ],
                    "fields": [
                        {
                            "id": "69",
                            "nome": "Skype",
                            "valor": null,
                            "tipo": "8",
                            "valores": "\"\""
                        }
                    ]
                },
                "tags": [],
                "stage": {
                    "id": "6408",
                    "name": "Qualificação"
                },
                "pipeline": {
                    "id": "1326",
                    "name": "TESTE"
                },
                "origin": {
                    "id": null,
                    "name": null,
                    "origin": null
                },
                "user": {
                    "id": "1",
                    "name": "Osvaldo Gehm",
                    "avatar": "https://s3-sa-east-1.amazonaws.com/piperun-localhost/avatar/b1ca588b7a294eb0b64935b108619d5c.png"
                },
                "city": {
                    "id": null,
                    "name": null,
                    "uf": null
                },
                "proposals": [
                    {
                        "id": "6603",
                        "value": "1099.90",
                        "value_mrr": "1000.00",
                        "valid_until": "2018-12-21",
                        "status": "0",
                        "hash": "4lnmc1mxwh1lu9ezudlq385gnjyxuee",
                        "purchase_order_client": null,
                        "user": {
                            "id": "1",
                            "name": "Osvaldo Gehm"
                        },
                        "itens": [],
                        "brand": [],
                        "billingCompany": [],
                        "shippingCompany": [],
                        "triangularCompany": [],
                        "parcels": [
                            {
                                "id": "89",
                                "parcel": "Entrada",
                                "account_id": "1",
                                "proposal_id": "6603",
                                "payment_method_type_id": {
                                    "id": "2",
                                    "name": "Cartão de Crédito"
                                },
                                "due_date": "0000-00-00",
                                "discount": null,
                                "value": "0.0000"
                            },
                            {
                                "id": "449",
                                "parcel": "1",
                                "account_id": "1",
                                "proposal_id": "6603",
                                "payment_method_type_id": {
                                    "id": "2",
                                    "name": "Cartão de Crédito"
                                },
                                "due_date": "0000-00-00",
                                "discount": null,
                                "value": "274.9800"
                            },
                            {
                                "id": "450",
                                "parcel": "2",
                                "account_id": "1",
                                "proposal_id": "6603",
                                "payment_method_type_id": {
                                    "id": "2",
                                    "name": "Cartão de Crédito"
                                },
                                "due_date": "0000-00-00",
                                "discount": null,
                                "value": "274.9800"
                            },
                            {
                                "id": "451",
                                "parcel": "3",
                                "account_id": "1",
                                "proposal_id": "6603",
                                "payment_method_type_id": {
                                    "id": "2",
                                    "name": "Cartão de Crédito"
                                },
                                "due_date": "0000-00-00",
                                "discount": null,
                                "value": "274.9800"
                            },
                            {
                                "id": "452",
                                "parcel": "4",
                                "account_id": "1",
                                "proposal_id": "6603",
                                "payment_method_type_id": {
                                    "id": "2",
                                    "name": "Cartão de Crédito"
                                },
                                "due_date": "0000-00-00",
                                "discount": null,
                                "value": "274.9600"
                            }
                        ]
                    },
                    {
                        "id": "6909",
                        "value": "0.00",
                        "value_mrr": "0.00",
                        "valid_until": "2019-02-15",
                        "status": "0",
                        "hash": "jnxqzjyftbswgsswooscs844swow8sw",
                        "purchase_order_client": null,
                        "user": {
                            "id": "1",
                            "name": "Osvaldo Gehm"
                        },
                        "itens": [],
                        "brand": [],
                        "billingCompany": [],
                        "shippingCompany": [],
                        "triangularCompany": [],
                        "parcels": []
                    },
                    {
                        "id": "6910",
                        "value": "100600.00",
                        "value_mrr": "0.00",
                        "valid_until": "2019-02-15",
                        "status": "0",
                        "hash": "s5tocvvy67ksog0kg8c4kswgog0c08k",
                        "purchase_order_client": null,
                        "user": {
                            "id": "1",
                            "name": "Osvaldo Gehm"
                        },
                        "itens": [
                            {
                                "id": "22596",
                                "name": "alo aloalo aloalo aloalo aloalo aloalo aloalo aloalo aloalo aloalo aloalo aloalo aloalo aloalo aloalo aloalo aloalo aloalo aloal",
                                "type": "0",
                                "description": null,
                                "quantity": "1",
                                "value": "100000.0000",
                                "discount_type": null,
                                "discount": null,
                                "duration": null,
                                "comissao": null,
                                "fix_commission_value": null,
                                "ipi_tax": null
                            },
                            {
                                "id": "22597",
                                "name": "Produto 1",
                                "type": "0",
                                "description": "<p>testando</p>",
                                "quantity": "1",
                                "value": "100.0000",
                                "discount_type": null,
                                "discount": null,
                                "duration": null,
                                "comissao": "0",
                                "fix_commission_value": null,
                                "ipi_tax": "0.00"
                            },
                            {
                                "id": "22598",
                                "name": "Produto 1",
                                "type": "0",
                                "description": "<p>testando</p>",
                                "quantity": "1",
                                "value": "0.0000",
                                "discount_type": null,
                                "discount": null,
                                "duration": null,
                                "comissao": "0",
                                "fix_commission_value": null,
                                "ipi_tax": "0.00"
                            },
                            {
                                "id": "22599",
                                "name": "Produto 1",
                                "type": "0",
                                "description": "<p>testando</p>",
                                "quantity": "1",
                                "value": "0.0000",
                                "discount_type": null,
                                "discount": null,
                                "duration": null,
                                "comissao": "0",
                                "fix_commission_value": null,
                                "ipi_tax": "0.00"
                            },
                            {
                                "id": "22600",
                                "name": "Produto 1",
                                "type": "0",
                                "description": "<p>testando</p>",
                                "quantity": "1",
                                "value": "100.0000",
                                "discount_type": null,
                                "discount": null,
                                "duration": null,
                                "comissao": "0",
                                "fix_commission_value": null,
                                "ipi_tax": "0.00"
                            },
                            {
                                "id": "22601",
                                "name": "Produto 1",
                                "type": "0",
                                "description": "<p>testando</p>",
                                "quantity": "1",
                                "value": "100.0000",
                                "discount_type": null,
                                "discount": null,
                                "duration": null,
                                "comissao": "0",
                                "fix_commission_value": null,
                                "ipi_tax": "0.00"
                            },
                            {
                                "id": "22602",
                                "name": "Produto 1",
                                "type": "0",
                                "description": "<p>testando</p>",
                                "quantity": "1",
                                "value": "100.0000",
                                "discount_type": null,
                                "discount": null,
                                "duration": null,
                                "comissao": "0",
                                "fix_commission_value": null,
                                "ipi_tax": "0.00"
                            },
                            {
                                "id": "22603",
                                "name": "Produto 1",
                                "type": "0",
                                "description": "<p>testando</p>",
                                "quantity": "1",
                                "value": "100.0000",
                                "discount_type": null,
                                "discount": null,
                                "duration": null,
                                "comissao": "0",
                                "fix_commission_value": null,
                                "ipi_tax": "0.00"
                            },
                            {
                                "id": "22604",
                                "name": "Produto 1",
                                "type": "0",
                                "description": "<p>testando</p>",
                                "quantity": "1",
                                "value": "100.0000",
                                "discount_type": null,
                                "discount": null,
                                "duration": null,
                                "comissao": "0",
                                "fix_commission_value": null,
                                "ipi_tax": "0.00"
                            }
                        ],
                        "brand": [],
                        "billingCompany": [],
                        "shippingCompany": [],
                        "triangularCompany": [],
                        "parcels": [
                            {
                                "id": "453",
                                "parcel": "À vista",
                                "account_id": "1",
                                "proposal_id": "6910",
                                "payment_method_type_id": {
                                    "id": "1",
                                    "name": "Boleto"
                                },
                                "due_date": "2019-02-08",
                                "discount": null,
                                "value": "0.0000"
                            }
                        ]
                    }
                ],
                "activities": [],
                "files": [],
                "fields": [
                    {
                        "id": "2283",
                        "nome": "ConversaoOrigem",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2284",
                        "nome": "ConversaoTermo",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2655",
                        "nome": "setor",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2656",
                        "nome": "cargo_odig",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2657",
                        "nome": "numero_funcionarios",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2658",
                        "nome": "Investimento mensal em Marketing Digital",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2936",
                        "nome": "Produto Interesse",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2937",
                        "nome": "Segmentação",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2938",
                        "nome": "Número de Funcionários",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2942",
                        "nome": "Link externo RD",
                        "valor": null,
                        "tipo": "9",
                        "valores": null
                    },
                    {
                        "id": "2945",
                        "nome": "Site:",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2946",
                        "nome": "Segmento:",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2947",
                        "nome": "Tecnologia:",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2948",
                        "nome": "Status da Conta:",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2950",
                        "nome": "Forma de contato desejada",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2951",
                        "nome": "Produto Desejado",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2952",
                        "nome": "Quantidade de Funcionários",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2953",
                        "nome": "Segmento:",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2954",
                        "nome": "Status da Conta:",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2955",
                        "nome": "Segmento:",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2956",
                        "nome": "Status da Conta:",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2959",
                        "nome": "regiao",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2960",
                        "nome": "orc",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2961",
                        "nome": "id_cotacao",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2966",
                        "nome": "Nome do Corretor",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2967",
                        "nome": "ID do Corretor",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2968",
                        "nome": "Nome do Cliente",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2969",
                        "nome": "CPF do Cliente",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2970",
                        "nome": "Data de Nascimento do Cliente",
                        "valor": null,
                        "tipo": "10",
                        "valores": null
                    },
                    {
                        "id": "2971",
                        "nome": "E-mail do Cliente",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2972",
                        "nome": "ID da Reserva",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "2973",
                        "nome": "testecustomu",
                        "valor": null,
                        "tipo": "3",
                        "valores": "[\"Zoho CRM\",\"HubSpot CRM\",\"PipeDrive\",\"Moskit\"]"
                    },
                    {
                        "id": "2974",
                        "nome": "testecustomm",
                        "valor": null,
                        "tipo": "6",
                        "valores": "[\"Zoho CRM\",\"HubSpot CRM\",\"PipeDrive\",\"Moskit\"]"
                    },
                    {
                        "id": "2975",
                        "nome": "teste-whatsapp",
                        "valor": null,
                        "tipo": "11",
                        "valores": null
                    },
                    {
                        "id": "2976",
                        "nome": "teste-skypechat",
                        "valor": null,
                        "tipo": "7",
                        "valores": null
                    },
                    {
                        "id": "2977",
                        "nome": "Dono da Oportunidade\tCidade\tEstado\tPessoa\tEmpresa\tCNPJ\tOrigem\tData de Cadastro\tTítulo\tDescrição\tObservacões\tWebsite\tTelefone Comercial\tTelefone Alternativo\tE-mail\tStatus do Negócio\tData de Fechamento\tValor do Negócio\tTags",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "3042",
                        "nome": "Pré-vendedor",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "3046",
                        "nome": "full_name",
                        "valor": null,
                        "tipo": "1",
                        "valores": null
                    },
                    {
                        "id": "3047",
                        "nome": "Teste de Texto longo",
                        "valor": "linha 1\nlinha 2\nlinha 3\nlinha 4",
                        "tipo": "5",
                        "valores": null
                    }
                ],
                "forms": [
                    {
                        "id": "20",
                        "name": "Qualificação",
                        "type": "1",
                        "title": null,
                        "content": null,
                        "background": null,
                        "text_color": null,
                        "fields": [
                            {
                                "id": "842",
                                "name": "Qual CRM utiliza?",
                                "value": "Agendor",
                                "type": "3",
                                "values": "[\"Zoho CRM\",\"HubSpot CRM\",\"PipeDrive\",\"Moskit\",\"Agendor\",\"N\\u00e3o uso CRM ainda\",\"Microsoft Dinamycs CRM\",\"SAP\",\"SalesForce\",\"Sage CRM\",\"Nectar CRM\",\"Oracle\",\"Sugar CRM\",\"Outro\",\"SMark CRM\",\"CRM One\",\"Bitrix 24\",\"GetApp\",\"Plug CRM\",\"CiaPipe\",\"VTiger\",\"BaseCRM\",\"Isocrm\",\"Idea CRM\",\"Gluo CRM\",\"CRM Zen\",\"Arrivo\"]"
                            },
                            {
                                "id": "843",
                                "name": "Qual o Segmento de Atuação da Empresa?",
                                "value": null,
                                "type": "1",
                                "values": null
                            },
                            {
                                "id": "844",
                                "name": "Utiliza inbound marketing integrado com vendas?",
                                "value": null,
                                "type": "3",
                                "values": "[\"Sim\",\"N\\u00e3o\",\"Sim mas n\\u00e3o integrado\"]"
                            },
                            {
                                "id": "845",
                                "name": "Quais os tipos de Canais de Vendas possui?",
                                "value": "[\"Promotores\"]",
                                "type": "6",
                                "values": "[\"Representantes\",\"Distribuidores\",\"Franquias\",\"Vendedores PJ\",\"Promotores\",\"N\\u00e3o possui Canais\",\"Corretores\"]"
                            },
                            {
                                "id": "841",
                                "name": "Quantidade de Usuários",
                                "value": null,
                                "type": "2",
                                "values": null
                            },
                            {
                                "id": "846",
                                "name": "Métodos de Vendas utilizados",
                                "value": null,
                                "type": "6",
                                "values": "[\"Inside Sales\",\"Outside - Key Account Sales\",\"Prospec\\u00e7\\u00e3o Ativa com SDR\",\"Inbound Marketing\"]"
                            },
                            {
                                "id": "608",
                                "name": "Decisor",
                                "value": null,
                                "type": "3",
                                "values": "[\"Sim\",\"N\\u00e3o\"]"
                            },
                            {
                                "id": "851",
                                "name": "Como ficou sabendo?",
                                "value": null,
                                "type": "1",
                                "values": null
                            },
                            {
                                "id": "2060",
                                "name": "Principal desafio",
                                "value": null,
                                "type": "5",
                                "values": null
                            },
                            {
                                "id": "847",
                                "name": "Metodologia de Vendas Utilizada",
                                "value": "[]",
                                "type": "6",
                                "values": "[\"Inbound Sales\",\"Outbound Sales\",\"inbound e Outbound\",\"Prospec\\u00e7\\u00e3o Ativa com SDR\"]"
                            },
                            {
                                "id": "2270",
                                "name": "Quantidade da Equipe de Vendas",
                                "value": null,
                                "type": "2",
                                "values": null
                            }
                        ]
                    },
                    {
                        "id": "171",
                        "name": "Qualificação Parceiros",
                        "type": "1",
                        "title": null,
                        "content": null,
                        "background": null,
                        "text_color": null,
                        "fields": [
                            {
                                "id": "831",
                                "name": "Número de Funcionários",
                                "value": null,
                                "type": "3",
                                "values": "[\"at\\u00e9 10\",\"at\\u00e9 50\",\"at\\u00e9 100\",\"at\\u00e9 200\"]"
                            },
                            {
                                "id": "843",
                                "name": "Qual o Segmento de Atuação da Empresa?",
                                "value": null,
                                "type": "1",
                                "values": null
                            },
                            {
                                "id": "842",
                                "name": "Qual CRM utiliza?",
                                "value": "Agendor",
                                "type": "3",
                                "values": "[\"Zoho CRM\",\"HubSpot CRM\",\"PipeDrive\",\"Moskit\",\"Agendor\",\"N\\u00e3o uso CRM ainda\",\"Microsoft Dinamycs CRM\",\"SAP\",\"SalesForce\",\"Sage CRM\",\"Nectar CRM\",\"Oracle\",\"Sugar CRM\",\"Outro\",\"SMark CRM\",\"CRM One\",\"Bitrix 24\",\"GetApp\",\"Plug CRM\",\"CiaPipe\",\"VTiger\",\"BaseCRM\",\"Isocrm\",\"Idea CRM\",\"Gluo CRM\",\"CRM Zen\",\"Arrivo\"]"
                            },
                            {
                                "id": "845",
                                "name": "Quais os tipos de Canais de Vendas possui?",
                                "value": "[\"Promotores\"]",
                                "type": "6",
                                "values": "[\"Representantes\",\"Distribuidores\",\"Franquias\",\"Vendedores PJ\",\"Promotores\",\"N\\u00e3o possui Canais\",\"Corretores\"]"
                            },
                            {
                                "id": "844",
                                "name": "Utiliza inbound marketing integrado com vendas?",
                                "value": null,
                                "type": "3",
                                "values": "[\"Sim\",\"N\\u00e3o\",\"Sim mas n\\u00e3o integrado\"]"
                            },
                            {
                                "id": "847",
                                "name": "Metodologia de Vendas Utilizada",
                                "value": "[]",
                                "type": "6",
                                "values": "[\"Inbound Sales\",\"Outbound Sales\",\"inbound e Outbound\",\"Prospec\\u00e7\\u00e3o Ativa com SDR\"]"
                            },
                            {
                                "id": "2268",
                                "name": "Região de Atuação do Parceiros",
                                "value": null,
                                "type": "8",
                                "values": null
                            },
                            {
                                "id": "2269",
                                "name": "Quantidade de Clientes da Base",
                                "value": null,
                                "type": "2",
                                "values": null
                            },
                            {
                                "id": "2270",
                                "name": "Quantidade da Equipe de Vendas",
                                "value": null,
                                "type": "2",
                                "values": null
                            },
                            {
                                "id": "2271",
                                "name": "Pertence a uma Rede ou Franquia",
                                "value": "[]",
                                "type": "6",
                                "values": "[\"RDstation\",\"Dinamize\\/Mail2easy\",\"Guia-se\",\"e-Goi\",\"KlickMail\",\"Hotmart\",\"LeadLovers\",\"PipZ\",\"ISVs\"]"
                            }
                        ]
                    },
                    {
                        "id": "216",
                        "name": "TESTE",
                        "type": "1",
                        "title": null,
                        "content": null,
                        "background": null,
                        "text_color": null,
                        "fields": [
                            {
                                "id": "841",
                                "name": "Quantidade de Usuários",
                                "value": null,
                                "type": "2",
                                "values": null
                            }
                        ]
                    },
                    {
                        "id": "220",
                        "name": "Teste de natal",
                        "type": "1",
                        "title": null,
                        "content": null,
                        "background": null,
                        "text_color": null,
                        "fields": [
                            {
                                "id": "843",
                                "name": "Qual o Segmento de Atuação da Empresa?",
                                "value": null,
                                "type": "1",
                                "values": null
                            }
                        ]
                    }
                ]
            }
        };

        trigger.handle(plg, event).then( result => {

            let deal = {
                id: '210093',
                title: 'teste 2',
                created_at: '2018-12-14',
                closed_at: null,
                description: null,
                observation: null,
                deleted: "0",
                freezed: "0",
                hash: 'cv0x71kt6866gzl0jx5fwfx53y98c3z',
                value: '101699.90',
                value_mrr: '1000.00',
                company: {
                    id: '208465',
                    name: "Nome não informado",
                    cnpj: null
                },
                person: {
                    id: '430005',
                    name: "Lorem Person",
                    cpf: null
                }
            };
            expect(result.id).to.eq(deal.id);
            expect(result.title).to.eq(deal.title);
            expect(result.created_at).to.eq(deal.created_at);
            expect(result.closed_at).to.eq(deal.closed_at);
            expect(result.description).to.eq(deal.description);
            expect(result.observation).to.eq(deal.observation);
            expect(result.deleted).to.eq(deal.deleted);
            expect(result.freezed).to.eq(deal.freezed);
            expect(result.hash).to.eq(deal.hash);
            expect(result.value).to.eq(deal.value);
            expect(result.value_mrr).to.eq(deal.value_mrr);
            expect(result.company.id).to.eq(deal.company.id);
            expect(result.company.name).to.eq(deal.company.name);
            expect(result.company.cnpj).to.eq(deal.company.cnpj);
            expect(result.person.id).to.eq(deal.person.id);
            expect(result.person.name).to.eq(deal.person.name);
            expect(result.person.cpf).to.eq(deal.person.cpf);
            done();
        }).catch(done);
    });
});