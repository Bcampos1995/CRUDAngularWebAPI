using System.Collections.Generic;
using System.Threading.Tasks;
using CRUDAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CRUDAPI.Controllers {
    [ApiController]
    [Route ("api/[controller]")]
    public class CargosController : ControllerBase {
        private readonly Contexto _contexto;

        public CargosController (Contexto contexto) {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cargo>>> PegarTodosAsync () {
            return await _contexto.Cargos.ToListAsync ();
        }

        [HttpGet ("{CargoId}")]
        public async Task<ActionResult<Cargo>> PegarCargoPeloIdAsync (int cargoId) {
            Cargo cargo = await _contexto.Cargos.FindAsync (cargoId);

            if (cargo == null)
                return NotFound ();

            return cargo;
        }

        [HttpPost]
        public async Task<ActionResult<Cargo>> SalvarCargoAsync (Cargo cargo) {
            await _contexto.Cargos.AddAsync (cargo);
            await _contexto.SaveChangesAsync ();

            return Ok ();
        }

        [HttpPut]
        public async Task<ActionResult> AtualizarCargoAsync (Cargo cargo) {
            _contexto.Cargos.Update (cargo);
            await _contexto.SaveChangesAsync ();

            return Ok ();
        }

        [HttpDelete ("{CargoId}")]
        public async Task<ActionResult> ExcluirCargoAsync (int cargoId) {
            Cargo cargo = await _contexto.Cargos.FindAsync (cargoId);
            if (cargo == null)
                return NotFound ();

            _contexto.Remove (cargo);
            await _contexto.SaveChangesAsync ();
            return Ok ();
        }

    }
}