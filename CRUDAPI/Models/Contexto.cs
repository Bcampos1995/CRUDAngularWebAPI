using Microsoft.EntityFrameworkCore;

namespace CRUDAPI.Models
{
    public class Contexto : DbContext   
    {
        public DbSet<Funcionario> Funcionarios {get; set; }
        public DbSet<Cargo> Cargos {get; set; }

        public Contexto(DbContextOptions<Contexto> opcoes) : base(opcoes)
        {

        }
    }
}