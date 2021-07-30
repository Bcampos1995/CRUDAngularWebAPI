using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CRUDAPI.Models
{
    public class Funcionario
    {
        [Key()]
        public int FuncionarioId {get; set; }
        public string Nome {get; set; }
        public string CPF {get; set; }
        public string DataAdmissao {get; set; }
        public string UtilizaVT {get; set; }
        public string DataCadastro {get; set; }
        public string DataAlteracao {get; set; }
        public string DataExclusao {get; set; }
    }
}