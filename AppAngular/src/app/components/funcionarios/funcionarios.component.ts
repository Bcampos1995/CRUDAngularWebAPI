import { FuncionariosService } from '../../funcionarios.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Funcionario } from 'src/app/Funcionario';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'],
})
export class FuncionariosComponent implements OnInit {
  formulario: any;
  tituloFormulario: string;
  funcionarios: Funcionario[];
  nomeFuncionario: string;
  funcionarioId: number;

  visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false; 
  
  modalRef: BsModalRef;

  constructor(private funcionariosService: FuncionariosService,
    private modalService: BsModalService) {}

  ngOnInit(): void {
    this.funcionariosService.PegarTodos().subscribe((resultado) => {
      this.funcionarios = resultado;
    });
  }

  ExibirFormularioCadastro(): void {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;
    this.tituloFormulario = 'Novo Funcionario';
    this.formulario = new FormGroup({
      Nome: new FormControl(null),
      CPF: new FormControl(null),
      DataAdmissao: new FormControl(null),
      utilizaVT: new FormControl(null),
      DataCadastro: new FormControl(null),
      DataAlteracao: new FormControl(null),
      DataExclusao: new FormControl(null),
    });
  }

  ExibirFormularioAtualizacao(funcionarioId): void {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.funcionariosService.PegarPeloId(funcionarioId).subscribe((resultado) => {
      this.tituloFormulario = `Atualizar ${resultado.nome}`;

      this.formulario = new FormGroup({
        funcionarioId: new FormControl(resultado.funcionarioId),
        Nome: new FormControl(resultado.nome),
        CPF: new FormControl(resultado.cpf),
        DataAdmissao: new FormControl(resultado.dataAdmissao),
        utilizaVT: new FormControl(resultado.utilizaVT),
        DataCadastro: new FormControl(resultado.dataCadastro),
        DataAlteracao: new FormControl(resultado.dataAlteracao),
        DataExclusao: new FormControl(resultado.dataExclusao),
      });
    });
  }

  EnviarFormulario(): void {
    const funcionario: Funcionario = this.formulario.value;

    if (funcionario.funcionarioId > 0) {
      this.funcionariosService.AtualizarFuncionario(funcionario).subscribe((resultado) => {
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;
        alert('Funcionario atualizado com sucesso');
        this.funcionariosService.PegarTodos().subscribe((registros) => {
          this.funcionarios = registros;
        });
      });
    } else {
      this.funcionariosService.SalvarFuncionario(funcionario).subscribe((resultado) => {
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;
        alert('Funcionario inserido com sucesso');
        this.funcionariosService.PegarTodos().subscribe((registros) => {
          this.funcionarios = registros;
        });
      });
    }
  }

  Voltar(): void {
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }

  ExibirConfirmacaoExclusao(funcionarioId, nomeFuncionario, conteudoModal: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(conteudoModal);
    this.funcionarioId = funcionarioId;
    this.nomeFuncionario = nomeFuncionario;
  }

  ExcluirFuncionario(funcionarioId){
    this.funcionariosService.ExcluirFuncionario(funcionarioId).subscribe(resultado => {
      this.modalRef.hide();
      alert('Funcionario excluída com sucesso');
      this.funcionariosService.PegarTodos().subscribe(registros => {
        this.funcionarios = registros;
      });
    });
  }
}
