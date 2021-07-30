using System.Collections.Generic;
using System.Threading.Tasks;
using CRUDAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CRUDAPI.Controllers {
    [ApiController]
    [Route ("api/[controller]")]
    public class FuncionariosController : ControllerBase {
        private readonly Contexto _contexto;

        public FuncionariosController (Contexto contexto) {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Funcionario>>> PegarTodosAsync () {
            return await _contexto.Funcionarios.ToListAsync ();
        }

        [HttpGet ("{FuncionarioId}")]
        public async Task<ActionResult<Funcionario>> PegarFuncionarioPeloIdAsync (int funcionarioId) {
            Funcionario funcionario = await _contexto.Funcionarios.FindAsync (funcionarioId);

            if (funcionario == null)
                return NotFound ();

            return funcionario;
        }

        [HttpPost]
        public async Task<ActionResult<Funcionario>> SalvarFuncionarioAsync (Funcionario funcionario) {
            await _contexto.Funcionarios.AddAsync (funcionario);
            await _contexto.SaveChangesAsync ();

            return Ok ();
        }

        [HttpPut]
        public async Task<ActionResult> AtualizarFuncionarioAsync (Funcionario funcionario) {
            _contexto.Funcionarios.Update (funcionario);
            await _contexto.SaveChangesAsync ();

            return Ok ();
        }

        [HttpDelete ("{FuncionarioId}")]
        public async Task<ActionResult> ExcluirFuncionarioAsync (int funcionarioId) {
            Funcionario funcionario = await _contexto.Funcionarios.FindAsync (funcionarioId);
            if (funcionario == null)
                return NotFound ();

            _contexto.Remove (funcionario);
            await _contexto.SaveChangesAsync ();
            return Ok ();
        }

    }
}