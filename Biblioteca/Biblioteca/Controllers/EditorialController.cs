using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Biblioteca.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;
using Biblioteca.DTO;

namespace Biblioteca.Controllers
{
 
    [Route("api/[controller]")]
    [ApiController]
    public class EditorialController : ControllerBase
    {
        private readonly LibrosContext context;
        private readonly IMapper mapper;

        public EditorialController(LibrosContext context,IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet()]
        public async Task<ActionResult<List<EditorialDto>>> GetEditorial()
        {
            var datos = await context.Editorials.ToListAsync();
            var val= mapper.Map<List<EditorialDto>>(datos);
            return val;
            
        }


        [HttpGet("Cantidad")]
        public async Task<ActionResult<IEnumerable<Editorial>>> GetCantidad()
        {
            var librosCantidad = await context.Editorials.Include(a => a.Libros).ToListAsync();
            List<int> count = new List<int>();
            foreach (var i in librosCantidad)
            {
                count.Add(i.Libros.Count);
            }
            return Ok(count);
           
        }

        
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Editorial>> GetEditorialID(int id)
        {
            var exist = context.Editorials.FindAsync(id);
           
            if(await exist == null)
            {
                return NotFound();
            }

            return await exist;
        }

        [HttpPost]
        public async Task<ActionResult<Editorial>> PostEditorial(EditorialDto editorial)
        {
            var datos = mapper.Map<Editorial>(editorial);
            context.Editorials.Add(datos);
            await context.SaveChangesAsync();
            return Accepted();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<Editorial>> UpdateEditorial(EditorialDto editorial, int id)
        {
            if(editorial.Id != id)
            {
                return BadRequest();
            }

            var datos = mapper.Map<Editorial>(editorial);

            context.Editorials.Update(datos);
            await context.SaveChangesAsync();

            return NoContent();

        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<Editorial>> DeleteEditorial(int id)
        {
            var exits = await context.Editorials.FindAsync(id);
            if(exits == null)
            {
                return NotFound();
            }

            context.Editorials.Remove(exits);
            await context.SaveChangesAsync();

            return NoContent();
        }


    }
}
