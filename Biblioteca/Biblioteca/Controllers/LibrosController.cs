using Microsoft.AspNetCore.Http;
using AutoMapper;
using Biblioteca.DTO;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Biblioteca.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;

namespace Biblioteca.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class LibrosController : ControllerBase
    {
        private readonly LibrosContext context;
        private readonly IMapper mapper;

        public LibrosController(LibrosContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }


        
        [HttpGet]
        public async Task<IEnumerable<LibroDto>> GetLibro()
        {
            var datos = await context.Libros.ToListAsync();
            return mapper.Map<IEnumerable<LibroDto>>(datos);
        }

        [HttpGet("id:int")]
        public async Task<ActionResult<Libro>> GetLibroId(int id)
        {
            var libro = context.Libros.FindAsync(id);
            if(await libro == null)
            {
                return NotFound();
            }

            return await libro;
        }

        [HttpPost]
        public async Task<ActionResult<Libro>> PostLibro(LibroDto libroDto)
        {
            
            var dto = mapper.Map<Libro>(libroDto); 
            context.Libros.Add(dto);
            await context.SaveChangesAsync();
            return Accepted();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<Libro>> PutLibro(LibroDto libro, int id)
        {
            
            if (libro.Id != id)
            {
                return BadRequest();
            }
            var dto = mapper.Map<Libro>(libro);
            context.Libros.Update(dto);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<Libro>> DeleteLibro(int id)
        {
            var exits = await context.Libros.FindAsync(id);
            if (exits == null)
            {
                return NotFound();
            }

            context.Libros.Remove(exits);
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
