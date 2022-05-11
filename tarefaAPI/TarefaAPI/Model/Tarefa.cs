using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TarefaAPI.Model
{
    public class Tarefa
    {
        public int Id { get; set; }
        [Required]
        [StringLength(60, ErrorMessage = "O Campo deve conter no maximo 60 caracteres")]
        public string Title { get; set; }
        [Required]
        
        public bool Status { get; set; }
        [Required]
        [StringLength(300, ErrorMessage = "O Campo deve conter no maximo 300 caracteres")]
        public string Description { get; set; }

    }
}
