using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TarefaAPI.Data;
using TarefaAPI.Model;

namespace TarefaAPI.Controllers
{   
    [ApiController]
    [Route("[controller]")]
    public class TarefaController : ControllerBase
    {
        private TarefaContext _context;

        public TarefaController()
        {
            _context = new TarefaContext();
        }
      

        [HttpPost]
        public IActionResult AdicionarTarefa([FromBody] Tarefa task)
        {
            _context.Tarefas.Add(task);
            _context.SaveChanges();
            return CreatedAtAction(nameof(RecuperaTarefaPorId), new { Id = task.Id }, task);
            
        }

        [HttpGet]
        public IEnumerable<Tarefa> RecuperaTarefa()
        {
            return _context.Tarefas.Where(t => t.Status == false);
        }

        [HttpGet("{id}")]
        public IActionResult RecuperaTarefaPorId(int id)
        {
            Tarefa task = _context.Tarefas.FirstOrDefault(task => task.Id == id);
            if(task != null)
            {
                return Ok(task);
            }
            return NotFound();
        }

        [HttpPut("{id}")]
        public IActionResult MudaTarefa(int id, [FromBody] Tarefa taskNew)
        {
            Tarefa task = _context.Tarefas.FirstOrDefault(task => task.Id == id);
            if(task == null)
            {
                return NotFound();
            }
            task.Title = taskNew.Title;
            task.Description = taskNew.Description;
            _context.SaveChanges();
            return NoContent();
        }

        [HttpGet("concluidas")]
        public IEnumerable<Tarefa> RecuperaTarefaConcluida()
        {
            return _context.Tarefas.Where(t => t.Status == true);
        }

        [HttpPut("concluir/{id}")]
        public IActionResult MudaStatus(int id)
        {
            Tarefa task = _context.Tarefas.FirstOrDefault(task => task.Id == id);
            if(task == null)
            {
                return NotFound();
            }
            task.Status = true;
            _context.SaveChanges();
            return NoContent();
        }

        [HttpPut("desmarcar/{id}")]
        public IActionResult MudaFalse(int id)
        {
            Tarefa task = _context.Tarefas.Where(task => task.Id == id).FirstOrDefault();
           
            task.Status = false;
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("delete/{id}")]
        public IActionResult RemoveTarefa(int id)
        {
            Tarefa task = _context.Tarefas.FirstOrDefault(task => task.Id == id);
            if(task == null)
            {
                return NotFound();
            }
            _context.Remove(task);
            _context.SaveChanges();
            return NoContent();
        }



    }
}
