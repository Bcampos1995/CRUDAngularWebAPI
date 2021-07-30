import { CargosService } from '../../cargos.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cargo } from 'src/app/Cargo';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css'],
})
export class CargosComponent implements OnInit {
  formulario: any;
  tituloFormulario: string;
  cargos: Cargo[];
  nomeCargo: string;
  cargoId: number;

  visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false; 
  
  modalRef: BsModalRef;

  constructor(private cargosService: CargosService,
    private modalService: BsModalService) {}

  ngOnInit(): void {
    this.cargosService.PegarTodos().subscribe((resultado) => {
      this.cargos = resultado;
    });
  }

  ExibirFormularioCadastro(): void {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;
    this.tituloFormulario = 'Novo Cargo';
    this.formulario = new FormGroup({
      Nome: new FormControl(null),
      DataCadastro: new FormControl(null),
      DataAlteracao: new FormControl(null),
      DataExclusao: new FormControl(null),
    });
  }

  ExibirFormularioAtualizacao(cargoId): void {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.cargosService.PegarPeloId(cargoId).subscribe((resultado) => {
      this.tituloFormulario = `Atualizar ${resultado.nome}`;

      this.formulario = new FormGroup({
        cargoId: new FormControl(resultado.cargoId),
        Nome: new FormControl(resultado.nome),
        DataCadastro: new FormControl(resultado.dataCadastro),
        DataAlteracao: new FormControl(resultado.dataAlteracao),
        DataExclusao: new FormControl(resultado.dataExclusao),
      });
    });
  }

  EnviarFormulario(): void {
    const cargo: Cargo = this.formulario.value;

    if (cargo.cargoId > 0) {
      this.cargosService.AtualizarCargo(cargo).subscribe((resultado) => {
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;
        alert('Cargo atualizado com sucesso');
        this.cargosService.PegarTodos().subscribe((registros) => {
          this.cargos = registros;
        });
      });
    } else {
      this.cargosService.SalvarCargo(cargo).subscribe((resultado) => {
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;
        alert('Cargo inserido com sucesso');
        this.cargosService.PegarTodos().subscribe((registros) => {
          this.cargos = registros;
        });
      });
    }
  }

  Voltar(): void {
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }

  ExibirConfirmacaoExclusao(cargoId, nomeCargo, conteudoModal: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(conteudoModal);
    this.cargoId = cargoId;
    this.nomeCargo = nomeCargo;
  }

  ExcluirCargo(cargoId){
    this.cargosService.ExcluirCargo(cargoId).subscribe(resultado => {
      this.modalRef.hide();
      alert('Cargo excluído com sucesso');
      this.cargosService.PegarTodos().subscribe(registros => {
        this.cargos = registros;
      });
    });
  }
}
