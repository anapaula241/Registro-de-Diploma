import React from 'react'
import useMaskInput from 'use-mask-input';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import { event } from 'jquery';
import { nativeTouchData } from 'react-dom/test-utils';
import { useNavigate } from 'react-router-dom';
import AlertSucess from '../Form/Alertas/AlertSucess';
import Acordeao from '../Acordeao';
import AlertError from '../Form/Alertas/AlertError';
import Input from '../Form/Input';
import Select from '../Form/Select';
import Textarea from '../Form/Textarea';
import { valida_cpf, valida } from '../validaCpf';

const ManutencaoDiplomaAlterar = () => {
  const [name, setName] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [rg, setRg] = React.useState('');
  const [nameFather, setNameFather] = React.useState('');
  const [nameMother, setNameMother] = React.useState('');
  const [nationality, setNationality] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');
  const [dateBirth, setDateBirth] = React.useState('');
  const [ra, setRa] = React.useState('');
  const [dateInclusion, setDateInclusion] = React.useState('');
  const [institution, setInstitution] = React.useState('');
  //   const [level, setLevel] = React.useState('');
  const [course, setCourse] = React.useState('');
  const [level, setLevel] = React.useState('');
  const [modality, setModality] = React.useState('');
  const [type, setType] = React.useState('');
  const [copyRegistration, setCopyRegistration] = React.useState('nao');
  const [foreignDocument, setForeignDocument] = React.useState('sim');
  const [passaport, setPassaport] = React.useState('');
  const [ semesterYearConclusion, setSemesterYearConclusion] = React.useState('');
  const [ dateGraduation, setDateGraduation] = React.useState('');
  const [ dateDispatch, setDateDispatch] = React.useState('');
  const [ processNumber, setProcessNumber] = React.useState('');
  const [ processNumber1, setProcessNumber1] = React.useState('');
  const [ processNumber2, setProcessNumber2] = React.useState('');
  const [ registerNumber, setRegisterNumber] = React.useState('');
  const [ book, setBook] = React.useState('');
  const [ sheetNumber, setSheetNumber] = React.useState('');
  const [ registrationDate,  setRegistrationDate] = React.useState('');
  const [ lotNumber,  setLotNumber] = React.useState('');
  const [ sealNumber,  setSealNumber] = React.useState('');
  const [ sealDate,  setSealDate] = React.useState('');
  const [ status,  setStatus] = React.useState('');
  const [ note,  setNote] = React.useState('');
  const [ brand,  setBrand] = React.useState('');
  const [ statusInput,  setStatusInput] = React.useState('');
  const [ complement,  setComplement] = React.useState('');
  // const [showAlert, setShowAlert] = React.useState(false);
  const [loading, setLoading] = React.useState('');
  // const [erroCpf, setErroCpf] = React.useState('');
  const { register, handleSubmit, errors } = useForm();
  const navigate = useNavigate();


  // simulando dados do banco 
  const [dados, setDados] = React.useState([
    { id: '1', aluno: 'luk', instituição: 'UEMG', data: '01/05/10' }
  ]);

  const onSubmit = (data) => console.log(data);

  const maskedCPFRef = useMaskInput({
    mask: ['999.999.999-99'],
    register: register({ required: true }),
  })

  function handleChange({ target }) {
    if (target.checked) {
      setStatus([...status, target.value]);
    } else {
      setStatus(status.filter((item) => item !== target.value));
    }
  }

  const handleChecked = (item) => { return status.includes(item); }

  const handleBack = () => navigate('/ferramentas/manutencaoDiploma');

  const handleCheckedType = ({ target }) => setType(target.checked);

  const handleCpf = ({ target }) => valida(target.value);
  return (
    <div className="container animeLeft grid grid-template-areas-1">
      <div class='titleGrid'><h1 className="mt-2 login title" >Manutenção Diploma</h1></div>
      <div class="sidenav">
        <Acordeao></Acordeao>
      </div>

      <div className='content' content>
        {/* <AlertSucess texto=' Registro Cadastrado com sucesso !'></AlertSucess> */}
        <AlertError texto='Houve um erro no seu Cadastro !'></AlertError>

        <Form onSubmit={handleSubmit(onSubmit)} className="mt-5 ">
          <Form.Row>
            <Input size='lg' lg="11" label='Nome do Aluno' name='name' register={register({ required: true })} value={name} type='text' textoErro={errors.name && "Campo Nome do Aluno é obrigatória"} placeholder='Nome do aluno' onChange={(event) => setName(event.target.value)}></Input>
          </Form.Row>
          <Form.Row>
            <Input size='lg' lg="5" label='CPF' name='cpf' size='lg' register={maskedCPFRef} value={cpf} type='text' placeholder=" Número do CPF" textoErro={errors.cpf && "Campo Cpf é obrigatório"} onChange={(event) => setCpf(event.target.value)}></Input>
            <Input lg="6" label='RG' name='rg' size='lg' register={register({ required: true })} value={rg} type='text' placeholder=" Número do RG" textoErro={errors.rg && "Campo RG é obrigatório"} onChange={(event) => setRg(event.target.value)}></Input>
          </Form.Row>
          <Form.Row >
            <Input size='lg' lg="11" label='Nome do Pai' name='nameFather' register={register({ required: true })} value={nameFather} type='text' textoErro={errors.nameFather && "Campo Nome do Pai é obrigatória"} placeholder='Nome do Pai' onChange={(event) => setNameFather(event.target.value)}></Input>
          </Form.Row>

          <Form.Row >
            <Input size='lg' lg="11" label='Nome da Mãe' name='nameMother' register={register({ required: true })} value={nameFather} type='text' textoErro={errors.nameMother && "Campo Nome da Mãe é obrigatória"} placeholder='Nome da Mãe' onChange={(event) => setNameMother(event.target.value)}></Input>
          </Form.Row>

          <Form.Row>
            <Select lg='5' size='lg' label='País' value={country} name='country' register={register({ required: true })} options={['Brasil', 'Português']} textoErro={errors.country && "Campo País é obrigatório"} onChange={({ target }) => setCountry(target.value)}></Select>
            <Select lg='6' size='lg' label='Estado' value={state} name='state' register={register({ required: true })} options={['Minas Gerais', 'São Paulo', 'Rio de Janeiro']} textoErro={errors.state && "Campo Estado é obrigatório"} onChange={({ target }) => setState(target.value)}></Select>
          </Form.Row>

          <Form.Row>
            <Select lg='5' size='lg' label='Cidade' value={city} name='city' register={register({ required: true })} options={['BH', 'Rio']} textoErro={errors.city && "Campo Cidade é obrigatório"} onChange={({ target }) => setCity(target.value)}></Select>
            <Input size='lg' lg="6" label='Data de Nascimento' name='dateBirth' register={register({ required: true })} value={dateBirth} type='date' textoErro={errors.dateBirth && "Campo data de Nascimento é obrigatório"} onChange={(event) => setDateBirth(event.target.value)}></Input>
          </Form.Row>
          <Form.Row>
            <Input size='lg' lg="5" label='Matrícula' name='ra' register={register({ required: true })} value={ra} type='text' textoErro={errors.ra && "Campo Matrícula é obrigatório"} placeholder='Número da Matrícula' onChange={(event) => setRa(event.target.value)}></Input>
            {/* <Input size='lg' lg="6" label='Tipo Diploma' name='level' register={register({ required: true })} value={level} type='text' textoErro={errors.level && "Campo Tipo Diploma é obrigatório"} placeholder='Número da Matrícula' onChange={(event) => setLevel(event.target.value)}></Input> */}
            <Input size='lg' lg="6" label='Data da Inclusão' name='dateInclusion' register={register({ required: true })} value={dateInclusion} type='date' textoErro={errors.dateInclusion && "Campo Data de Inclusão é obrigatório"} onChange={(event) => setDateInclusion(event.target.value)}></Input>
          </Form.Row>

          <Form.Row>
            <Select lg='5' size='lg' label='Instituição' value={institution} name='institution' register={register({ required: true })} options={['UEMG', 'UFMG', 'UFLA']} textoErro={errors.institution && "Campo Instituição é obrigatório"} onChange={({ target }) => setInstitution(target.value)}></Select>
            <Select lg='6' size='lg' label='Curso' value={course} name='course' register={register({ required: true })} options={['Engenharia', 'Português', 'Matemática']} textoErro={errors.course && "Campo Curso é obrigatório"} onChange={({ target }) => setCourse(target.value)}></Select>
          </Form.Row>

          <Form.Row>
            <Select lg='5' size='lg' label='Grau do curso' value={level} name='level' register={register({ required: true })} options={['Graduação', 'Pós Graduação', 'Apostila']} textoErro={errors.level && "Campo Grau do Curso  é obrigatório"} onChange={({ target }) => setLevel(target.value)}></Select>
            <Select lg='6' size='lg' label='Habilitacao' value={modality} name='modality' register={register({ required: true })} options={['Bacheralado', 'Licenciatura', 'Tecnólogo']} textoErro={errors.modality && "Campo Habilitação é obrigatório"} onChange={({ target }) => setModality(target.value)}></Select>
          </Form.Row>


          <Form.Row>
            <Form.Group as={Col} lg="11">
              <Form.Label className='mr-3'>Tipo</Form.Label>
              <Form.Check inline type='checkbox' ref={register({ required: false })} name='type' value="type" onChange={handleCheckedType} label='Apostilamento' />
            </Form.Group>
          </Form.Row>

          <Form.Label >Registro de 2º Via</Form.Label>
          <Form.Check type='radio' ref={register({ required: true })} name='copyRegistration' value="nao" checked={copyRegistration === 'nao'} onChange={({ target }) => setCopyRegistration(target.value)} label='Não' />
          <Form.Check type='radio' ref={register({ required: true })} name='copyRegistration' value="sim" checked={copyRegistration === 'sim'} onChange={({ target }) => setCopyRegistration(target.value)} label='Sim' />
          <Form.Text className='error'><p>{errors.copyRegistration && "Campo Sexo é obrigatório"}</p></Form.Text>

          <Form.Label >Documento Estrangeiro</Form.Label>
          <Form.Check type='radio' ref={register({ required: true })} name='foreignDocument' value="nao" checked={foreignDocument === 'nao'} onChange={({ target }) => setForeignDocument(target.value)} label='Não' />
          <Form.Check type='radio' ref={register({ required: true })} name='foreignDocument' value="sim" checked={foreignDocument === 'sim'} onChange={({ target }) => setForeignDocument(target.value)} label='Sim' />
          <Form.Text className='error'><p>{errors.foreignDocument && "Campo Sexo é obrigatório"}</p></Form.Text>

          <Form.Row>
            <Input size='lg' lg="5" label='Num. de Passaporte' name='passaport' register={register({ required: true })} value={passaport} type='number' textoErro={errors.passaport && "Campo Num. de Passaporte é obrigatório"} onChange={(event) => setPassaport(event.target.value)}></Input>
            <Input size='lg'lg="6" label='Ano/Semestre Letivo de Conclusão ' name='semesterYearConclusion' register={register({ required: true })} value={semesterYearConclusion} type='text' textoErro={errors.semesterYearConclusion && "Campo Ano/Semestre Letivo de Conclusão é obrigatório"} onChange={(event) => setSemesterYearConclusion(event.target.value)}></Input>
            
          </Form.Row>

          <Form.Row>
          <Input size='lg' lg="5" label='Data Colação De Grau' name='dateGraduation' register={register({ required: true })} value={dateGraduation} type='date' textoErro={errors.dateGraduation && "Campo Data inicial é obrigatória"} onChange={(event) => setDateGraduation(event.target.value)}></Input>
             <Input size='lg' lg="6" label='Data Expedição' name='dateDispatch' register={register({ required: true })} value={dateDispatch} type='date' textoErro={errors.dateGraduation && "Campo Data Expedição é obrigatória"} onChange={(event) => setDateDispatch(event.target.value)}></Input>
            
          </Form.Row>

          <Form.Row>
          <Input size='lg' lg="3" label='Num. Processo' name='processNumber' register={register({ required: true })} value={processNumber} type='text' textoErro={errors.processNumber && "Campo Num. Processo é obrigatório"} onChange={(event) => setProcessNumber(event.target.value)}></Input>
            <Input size='lg' lg="4" label='Num. Processo 1' name='processNumber1' register={register({ required: true })} value={processNumber1} type='text' textoErro={errors.processNumber1 && "Campo Num. Processo 1 é obrigatório"} onChange={(event) => setProcessNumber1(event.target.value)}></Input>
            <Input size='lg' lg="4" label='Num. Processo 2' name='processNumber2' register={register({ required: true })} value={processNumber2} type='text' textoErro={errors.processNumber2 && "Campo Num. Processo 2 é obrigatório"} onChange={(event) => setProcessNumber2(event.target.value)}></Input>
            
          </Form.Row>

          <Form.Row>
          <Input size='lg' lg="3" label='Num. Registro' name='registerNumber' register={register({ required: true })} value={registerNumber} type='text' textoErro={errors.processNumber && "Campo Num. Registro 1 é obrigatório"} onChange={(event) => setRegisterNumber(event.target.value)}></Input>
            <Input size='lg' lg="4" label='Livro' name='book' register={register({ required: true })} value={book} type='text' textoErro={errors.book && "Campo Livro é obrigatório"} onChange={(event) => setBook(event.target.value)}></Input>
            <Input size='lg' lg="4" label='Página' name='sheetNumber' register={register({ required: true })} value={sheetNumber} type='text' textoErro={errors.sheetNumber && "Campo Página é obrigatório"} onChange={(event) => setSheetNumber(event.target.value)}></Input>
                                 
          </Form.Row>

          <Form.Row>
                   <Input size='lg' lg="3" label='Num.Lote' name='lotNumber' register={register({ required: true })} value={lotNumber} textoErro={errors.lotNumber && "Campo Num.Lote é obrigatório"} onChange={(event) => setLotNumber(event.target.value)}></Input>
                   <Input size='lg' lg="4" label='Data de Registro' type='date' name='registrationDate' register={register({ required: true })} value={registrationDate} textoErro={errors.registrationDate && "Campo Data de Registro é obrigatória"} onChange={(event) => setRegistrationDate(event.target.value)}></Input>
          <Input size='lg' lg="4" label='Num.Selo' name='sealNumber' register={register({ required: true })} value={sealNumber} textoErro={errors.sealNumber && "Campo Num.Selo é obrigatório"} onChange={(event) => setSealNumber(event.target.value)}></Input>
         
          
          </Form.Row>
          <Form.Row>
          <Input size='lg' type='date' lg="5" label='Data Selo' name='sealDate' register={register({ required: true })} value={sealDate} textoErro={errors.lotNumber && "Campo Data Selo é obrigatório"} onChange={(event) => setSealDate(event.target.value)}></Input>
            <Select lg='6' size='lg' label='Situação' value={status} name='status' register={register({ required: true })} options={['Cadastro', 'Em Análise','Aguardando Recebimento', 'Registrado', 'P/Pro Reitor(a)', 'Assin. Pro Reitor(a)', 'P/Reitor(a)', 'Assin. Reitor(a)', 'Liberado', 'Em Diligência']} textoErro={errors.status && "Campo Situação é obrigatório"} onChange={({ target }) => setStatus(target.value)}></Select>
          </Form.Row>

          <Form.Group as={Col} lg="11">
            <Form.Label>Situação2</Form.Label>
            <Form.Check type='checkbox' ref={register({ required: true })} name='checkbox' value="faltaDocumentosPessoais" checked={handleChecked('faltaDocumentosPessoais')} onChange={handleChange} label='Falta Documentos Pessoais' />
            <Form.Check type='checkbox' ref={register({ required: true })} name='checkbox' value='reconhecimentoCursoVencido' checked={handleChecked('reconhecimentoCursoVencido')} onChange={handleChange} label='Reconhecimento do Curso Vencido' />
            <Form.Check type='checkbox' ref={register({ required: true })} name='checkbox' value='erroDiploma' checked={handleChecked('erroDiploma')} onChange={handleChange} label='Erro No Diploma' />
            <Form.Check type='checkbox' ref={register({ required: true })} name='checkbox' value='erroTrancreverCarimboRegistroDiploma' checked={handleChecked('erroTrancreverCarimboRegistroDiploma')} onChange={handleChange} label='Erro ao Trancrever para o Carimbo de Registro no Diploma' />
            <Form.Check type='checkbox' ref={register({ required: true })} name='checkbox' value='DAEValorInferiorCorrespondente' checked={handleChecked('DAEValorInferiorCorrespondente')} onChange={handleChange} label='DAE com Valor Inferior ao Correspondente de R$ 77,33' />
            <Form.Check type='checkbox' ref={register({ required: true })} name='checkbox' value='erroHistorico' checked={handleChecked('erroHistorico')} onChange={handleChange} label='Erro no Histórico' />
            <Form.Text className='error'><p>{errors.checkbox && "Campo Situação2 é obrigatório"}</p></Form.Text>
          </Form.Group>

          <Form.Row>
            <Textarea label='Observação'  name ='note' value ={note} ref={register({ required: true })} lg='11' rows={4} size='lg' className='mt-3' onChange={(event) => setNote(event.target.value)}></Textarea>
          </Form.Row>
         
          <Form.Row>
          <Input size='lg' lg="5" label='Marca' name='brand' register={register({ required: true })} value={brand} textoErro={errors.brand && "Campo Marca é obrigatório"} onChange={(event) => setBrand(event.target.value)}></Input>
          <Input size='lg' lg="6" label='Status' name='statusInput' register={register({ required: true })} value={statusInput} textoErro={errors.statusInput && "Campo Status é obrigatório"} onChange={(event) => setStatusInput(event.target.value)}></Input>
          </Form.Row>

          <Form.Row>
          <Input size='lg' lg="11" label='Complemento' name='complement' register={register({ required: true })} value={complement} textoErro={errors.complement && "Campo Complemento é obrigatório"} onChange={(event) => setComplement(event.target.value)}></Input>
          </Form.Row>

          {loading ? (<Button size='lg' disabled className="col-lg-2 mt-3 " variant="primary" type="submit"> Aguarde...</Button>
          ) : (<Button size='lg' className="col-lg-2 mt-3  mb-4 mr-2 " variant="primary" type="submit"> Pesquisar </Button>)}
          <Button size='lg' className="col-lg-2 mt-3 mb-4 mr-2 " variant="secondary" type="submit" > Salvar </Button>
          <Button size='lg' className="col-lg-2 mt-3 mb-4 " variant="secondary" type="submit" onClick={handleBack}> Voltar </Button>

        </Form>
      </div>
    </div>

  )
}

export default ManutencaoDiplomaAlterar
