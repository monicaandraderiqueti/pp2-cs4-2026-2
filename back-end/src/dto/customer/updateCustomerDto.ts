//esse DTO será usado na operação de atualização de um cliente existente
//o "?" representa que não é necessário informar todos os campos
export interface UpdateCustomerDto {
 name?: string;
 ident_document?: string;
 birth_date?: Date | null;
 street_name?: string;
 house_number?: string;
 complements?: string | null;
 district?: string;
 municipality?: string;
 state?: string;
 phone?: string;
 email?: string;
}
