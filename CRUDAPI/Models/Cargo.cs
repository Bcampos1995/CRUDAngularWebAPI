using System;
using System.ComponentModel.DataAnnotations;

namespace CRUDAPI.Models
{
    public class Cargo
    {
        [Key()]
        public int CargoId {get; set; }
        public string Nome {get; set; }
        public string DataCadastro {get; set; }
        public string DataAlteracao {get; set; }
        public string DataExclusao {get; set; }
    }
}