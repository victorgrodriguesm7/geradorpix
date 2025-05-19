export namespace GeradorPix {
    export enum KeyType {
        Telefone = "telefone",
        Cnpj = "cnpj",
        Cpf = "cpf",
        Outro = "outro",
        Email = "email"
    }

    export type Payload = {
        keyType: GeradorPix.KeyType;
        key: string;
        name: string;
        amount?: number;
        location?: string;
        reference?: string;
    }

    export type PixData = Payload & { image: string; copyAndPaste: string; }
}