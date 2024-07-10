import { FC, useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import './infoPageStyles.scss';
import {  CompetenceInfo, Discipline, DisciplineInfo, EducationProgram, LaborIntensity } from "../../types/models";
import { DisciplineList, GroupList, InfoTable, Information, TextField, Dialog,LaborIntensityPole, DropDown } from "../../components";
import { TableTab } from "../../components/infoTable/infoTableProps";
import { Table } from "../../components/table";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxToolkitHooks";
import { addDiscipline, addDisciplineInfo, addEducationProgramm, deleteDiscipline, deleteDisciplineInfo, deleteEducationProgramm, editDiscipline, editDisciplineInfo, editEducationProgramm, getEducationProgram } from "../../services";
import { IdKey } from "../../constants/commonConstants";
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "../../constants/commonConstants";
import { logOut } from "../../store/slices/userSlice";
import { PlusIcon } from "../../assets/icons";


// const fakegroupData = 
// [
//    {id: 1, title: 'ИВТ', year: 2020, competences: [{id: 3, codeCompetence: 'ОПК -2', description: 'умение слушать и говорить с другими, правильно понимать информацию и передавать её, а также считывать невербальные сигналы'},
//  {id: 5,  codeCompetence: 'ОПК-3', description: 'умение слушать и говорить с другими, правильно понимать информацию и передавать её, а также считывать невербальные сигналы'},
//  {id: 6,  codeCompetence: 'ОПК-4', description: 'умение слушать и говорить с другими, правильно понимать информацию и передавать её, а также считывать невербальные сигналы'},
//  {id: 7,  codeCompetence: 'ОПК-3', description: 'умение слушать и говорить с другими, правильно понимать информацию и передавать её, а также считывать невербальные сигналы'},
//    ],
//    disciplines: [{id: 1, title: 'Управление данными', status: 'Новая', 
//    goal: 'Сформировать компетенции обучающегося в области закономерностей развития и функционирования психики и сознания человека, ознакомить с факторами, влияющими на его становление как личности, понимание себя как личности, проявления взаимоотношений с другими людьми',
//    task: 'Объективную оценку состояния природных ресурсов. Оценка проводится по целому ряду параметров: количество, качество, степень загрязненности, влияние различных сфер человеческой деятельности на их воспроизводство и т.д.',
//    info: [ {id: 3, codeCompetence:'ОПК-3', knowledge : 'row 1 cell 2', skill : 'Профессиональные компетенции — это набор знаний, умений и навыков, личных и деловых качеств, которые помогают эффективно решать задачи и развиваться в своей работе', ownership: 'Профессиональные компетенции — это набор знаний, умений и навыков, личных и деловых качеств, которые помогают эффективно решать задачи и развиваться в своей работе'},
   
//    {id: 4, codeCompetence:'ОПК-2', knowledge : 'row 2 cell 2' },
//    {id: 5, codeCompetence:'ОПК-2', knowledge : 'row 2 cell 2' },
//    {id: 6, codeCompetence:'ОПК-2', knowledge : 'row 2 cell 2' }],
//    laborIntensity: [
//     {id: 3, id_sem: 2, info: 'Операционные системы - это программное обеспечение, которое управляет работой компьютера и обеспечивает взаимодействие между аппаратными устройствами и прикладными программами. Они являются основой для работы компьютера и обеспечивают управление ресурсами, такими как процессор, память, дисковые устройства и сетевое оборудование. Операционные системы обеспечивают удобный интерфейс для пользователя, позволяя ему запускать программы, управлять файлами и настройками системы. Благодаря операционным системам компьютер может работать эффективно и выполнять различные задачи, от простых операций до сложных вычислений. Они играют важную роль в функционировании современных компьютеров и мобильных устройств, обеспечивая им стабильную и безопасную работу.'},
// ],
//    },
//    {id: 16, title: 'Разработка пользовательских интерфейсов', status: 'Готова'}, {id: 3, title: 'Профессиональная этика', status: 'Утверждена'} ],
  
//  },
//    {id: 2, title: 'ИСТ', year: 2020,disciplines: [{id: 1, title: 'Проектная деятельность', status: 'Готова'},{id: 2, title: 'Разработка автоматизированных систем', status:'Новая'}] },
//    {id: 3, title: 'ПО', year: 2020, disciplines: []},
//    {id: 4, title: 'ВМ', year: 2020, disciplines: []},
//    {id: 5, title: 'АП', year: 2020, disciplines: []},
//    {id: 6, title: 'ИБ', year: 2020, disciplines: []},
//    {id: 7, title: 'СИБ', year: 2020, disciplines: []},
//    {id: 8, title: 'АБВ', year: 2020, disciplines: []},
//    {id: 9, title: 'ГДЕ', year: 2020, disciplines: []},
//    {id: 10, title: 'ЖЗИ', year: 2020, disciplines: []},
//    {id: 11, title: 'КЛМ', year: 2020, disciplines: []},
//    {id: 12, title: 'ПО', year: 2020, disciplines: []},
//    {id: 13, title: 'ВМ', year: 2020, disciplines: []},
//    {id: 14, title: 'АП', year: 2020, disciplines: []},
//    {id: 15, title: 'ИБ', year: 2020, disciplines: []},

   
// ] as Array<EducationProgram> ;



 
export const InfoPage: FC =  () =>{
    const { role, accessToken, id } = useAppSelector((state) => state.user);
    const {  educationProgramms } = useAppSelector((state) => state.educationProgramm);
    const dispatch = useAppDispatch();

    const [groupData, setGroupData] = useState<Array<EducationProgram>>([]);
    const [disciplineData, setDisciplineData] = useState<Array<Discipline>>([]);
    const [infoData, setInfoData] = useState<Array<DisciplineInfo>>([]);
    const [laborIntensity, setLaborIntensity] = useState<Array<LaborIntensity>>([]);
    const [competenceInfo, setCompetenceInfo] = useState<Array<CompetenceInfo>>([]);

    const [selectedGroupId, setSelectedGroupId] = useState<number>();
    const [selectedGroup, setSelectedGroup] = useState<EducationProgram>();

    const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline>();
    const [selectedDisciplineId, setSelectedDisciplineId] = useState<number>();

    const [selectedDisciplineInfo, setSelectedDisciplineInfo] = useState<DisciplineInfo>();
    const [selectedDisciplineInfoId, setSelectedDisciplineInfoId] = useState<number>();

    const [showDisciplineList, setShowDisciplineList] = useState(false);
    const [showTitle, setShowTitle] = useState(true);
    
//Названия вкладок
    const [showTable, setShowTable] = useState(false);
    const [showTabRes, setShowTabRes] = useState(false);
    const [showTabInfo, setShowTabInfo] = useState(false);
    const [showTabLabor, setShowTabLabor] = useState(false);
//Редактирование таблицы Discipline Info
    const [showDialog, setShowDialog] = useState(false);
    const [tabCompetence, setTabCompetence] = useState('');
    const [tabKnowledge, setTabKnowledge] = useState('');
    const [tabSkill, setTabSkill] = useState('');
    const [tabOwnership, setTabOwnership] = useState('');

    const [rowToEdit, setRowToEdit] = useState(0);
    const [edProgrammToEdit, setEdProgrammToEdit] = useState(0);
    const [disciplineToEdit, setDisciplineToEdit] = useState(0);

    const [userActionMode, setUserActionMode] = useState<'create' | 'edit'>('create');
    const [edProgrammActionMode, setEdProgrammMode] = useState<'create' | 'edit'>('create');
    const [disciplineActionMode, setDisciplineActionMode] = useState<'create' | 'edit'>('create');
//Редактирование таблицы EducationProgramm
    const [showEdProgrammDialog, setShowEdProgrammDialog] = useState(false);
    const [edProgTitle, setEdProgTitle] = useState('');
    const [edProgYear, setEdProgYear] = useState('');
    const [edProgDescription, setEdProgDescription] = useState('');
//Редактирование таблицы Discipline
    const [showDisciplineDialog, setShowDisciplineDialog] = useState(false);
    const [discCodeDisc, setDiscCodeDisc] = useState('');
    const [discTitle, setDiscTitle] = useState('');
    const [discShortName, setDiscShortName] = useState('');
    const [discStatus, setDiscStatus] = useState('Новая');
    const [discGoal, setDiscGoal] = useState('');
    const [discTask, setDiscTask] = useState('');



    const navigate = useNavigate();
    
    const titleInfo = 'Выберите дисциплину для просмотра';

   

    useEffect(() => {
        if(accessToken) {
            if(!role) {
                navigate(`${RoutesPath.NoPermissions}`);
            }
            else if (role === 'admin') {
              navigate(`${RoutesPath.Administration}`);
            }
            else {
                dispatch(getEducationProgram(id??''));
            }
        } else {
            navigate(`${RoutesPath.Login}`);
        }
    }, [accessToken, role, navigate, dispatch]);

    
   
    useEffect(() => {
        setGroupData(educationProgramms);
            if(Array.isArray(educationProgramms) && educationProgramms.length) {
                 setSelectedGroupId(undefined);
            }
    }, [educationProgramms]);
    

    useEffect(() => {
        const selectedGroup = groupData.find(g => g.id === selectedGroupId);
        const selectedDiscipline = disciplineData.find(d => d.id === selectedDisciplineId);
        
        setDisciplineData(selectedGroup ? selectedGroup.disciplines : []);
       // console.log(selectedDiscipline);
        setInfoData(selectedDiscipline ? selectedDiscipline.disciplineInfos : []);
        setLaborIntensity(selectedDiscipline ? selectedDiscipline.laborIntensities : []);
        
        setCompetenceInfo(selectedGroup ? selectedGroup.competences : []);
       // console.log(infoData);
        setSelectedDiscipline(undefined);
        setSelectedDisciplineInfo(undefined);
    //  console.log(laborIntensity)
        
    }, [groupData, selectedGroupId, selectedDisciplineId]);

    useEffect(() => {

        if(userActionMode === 'edit'){
          const disciplineInfo = userActionMode === 'edit' 
        ? infoData.find(e => e.id === rowToEdit)
        : undefined;
         
          setTabCompetence(disciplineInfo?.codeCompetence??'');
          setTabKnowledge(disciplineInfo?.knowledge ??'');
          setTabOwnership(disciplineInfo?.ownership ??'');
          setTabSkill(disciplineInfo?.skill ??'');
        }},[infoData, userActionMode,rowToEdit])

    
    useEffect(() => {

            if(edProgrammActionMode === 'edit'){
              const edProg = edProgrammActionMode === 'edit' 
            ? groupData.find(g => g.id === edProgrammToEdit)
            : undefined;
             
              setEdProgTitle(edProg?.title ??'');
              setEdProgYear(edProg?.year ??'');
              setEdProgDescription(edProg?.description ??'');
            }},[infoData, edProgrammActionMode,edProgrammToEdit])

    useEffect(() => {
        console.log(disciplineActionMode)
            if(disciplineActionMode === 'edit'){
              const disc = disciplineActionMode === 'edit' 
            ? disciplineData.find(d => d.id === disciplineToEdit)
            : undefined;
             
              setDiscCodeDisc(disc?.codeDisc ??'');
              setDiscTitle(disc?.title ??'');
              setDiscShortName(disc?.shortName ??'');
              setDiscTask(disc?.task ??'');
              setDiscGoal(disc?.goal ??'');
              setDiscStatus(disc?.status ??'');
             
            }},[infoData, disciplineActionMode,disciplineToEdit])
     
    const statusChangedHandler = (value: string) => {
        setDiscStatus(value);
    };
          

    const groupSelectedHandler = (id: number) => {
        setSelectedGroupId(id);
        setShowDisciplineList(true);
        setSelectedDiscipline(undefined);
        setSelectedDisciplineInfo(undefined);
        if(selectedDiscipline == undefined )
        {setShowTitle(true);
        setShowTable(false)
      }
        const group = groupData.find(g => g.id === id);
        setSelectedGroup(group);

    }



    const disciplineSelectedHandler = (id?: number) => {
        // const _id: number | undefined = !id ? undefined : +id;
        setSelectedDisciplineId(id);
        setShowTitle(false);
        setShowTable(true); //ПОМЕНЯЛА  
        setShowTabRes(false);
        setShowTabInfo(false);
        setShowTabLabor(false)
        
        const discipline =disciplineData.find(g => g.id === id);
        setSelectedDiscipline(discipline);
        // console.log(selectedDiscipline)
    }

    const disciplineInfoSelectedHandler = (id?: number) => {
        // const _id: number | undefined = !id ? undefined : +id;
        setSelectedDisciplineInfoId(id);
        
        const disciplineInfo =infoData.find(g => g.id === id);
        setSelectedDisciplineInfo(disciplineInfo);
        // console.log(selectedDiscipline)
    }

    const tabSelectedHandler = (id:number) => {
        if(id == 1)
        {setShowTabRes(false);
        setShowTabInfo(true);
        setShowTabLabor(false)
    }
        else if (id === 2)
            {
                {setShowTabRes(true);
                setShowTabInfo(false);}
                setShowTabLabor(false)
            }
        
        else if (id === 3)
            {
                {setShowTabRes(false);
                setShowTabInfo(false);
                setShowTabLabor(true);
            }

            }
        else
        {setShowTabRes(false);
        setShowTabInfo(false);
        setShowTabLabor(false)
    }
    }

    const infoTableTab: TableTab = {
        id: 1,
        tabTitle: 'Информация'
    };

    const resultsTableTab: TableTab =  {
        id: 2,
        tabTitle: 'Результаты'
    };

    const laborIntensityTableTab: TableTab =  {
        id: 3,
        tabTitle: 'Трудоёмкость'
    };

    const clearDialogFields = () => {
        if(userActionMode === 'create' || edProgrammActionMode === 'create' || disciplineActionMode === 'create')
            {
                setRowToEdit(0);
                setEdProgrammToEdit(0);
                setDisciplineToEdit(0);
                setTabCompetence('');
                setTabKnowledge('');
                setTabOwnership('');
                setTabSkill('');
                setEdProgDescription('');
                setEdProgYear('');
                setEdProgTitle('');
                setEdProgDescription('');
                setDiscCodeDisc('');
                setDiscStatus('Новая');
                setDiscGoal('');
                setDiscShortName('');
                setDiscTask('');
                setDiscTitle('');
           }
           
    }

    const createEdProgrammHandler = () => {
        setEdProgrammMode('create');
        setShowEdProgrammDialog(true);
    }

    const createDisciplineInfoHandler = () => {
        setUserActionMode('create');
        setShowDialog(true);
    }

    const createDisciplineHandler = () => {
        setDisciplineActionMode('create');
        setShowDisciplineDialog(true);
    }

    const editLineHandler = (id:number) =>{

      setUserActionMode('edit');
      setRowToEdit(id);
      setShowDialog(true);
    }


    const tableDialogContentRenderer = () => {
       
         return (
                <>
                    
                    {/* {selectedDiscipline &&(<UploadIcon color='#7a7a7a' onClick={uploadFileHandler}/>)} */}
                    <TextField labelText="Название компетенции" value={tabCompetence } onChange={(val) => setTabCompetence(val)} />
                    <TextField labelText="Знать" value={tabKnowledge} onChange={(val) => setTabKnowledge(val)} />
                    <TextField labelText="Уметь" value={tabSkill} onChange={(val) => setTabSkill(val)} />
                    <TextField labelText="Владеть" value={tabOwnership} onChange={(val) =>setTabOwnership (val)} />     
                </>
            );
    
       
    }
    const closeDialogHandler = () =>{
        setShowDialog(false);
         clearDialogFields();
    }

    const closeEdProgrammDialogHandler = () =>{
        setShowEdProgrammDialog(false);
         clearDialogFields();

    }

    const closeDisciplineDialogHandler = () =>{
        setShowDisciplineDialog(false);
         clearDialogFields();

    }

   

    const editEdProgrammHandler = (id:number) =>{

        setEdProgrammMode('edit');
        setEdProgrammToEdit(id);
        setShowEdProgrammDialog(true);
      }

    const editDisciplineHandler = (id:number) =>{

        setDisciplineActionMode('edit');
        setDisciplineToEdit(id);
        setShowDisciplineDialog(true);
      }
   
      const saveEdProgrammDialogHandler = () => {
        
        if(!selectedGroupId){
            closeEdProgrammDialogHandler();
          return
        }
  
        const savingEducationProgramm = {
          userId: selectedGroup?.id ?? '',
          title: edProgTitle,
          year: edProgYear,
          description: edProgDescription,
        }
  
        if (edProgrammActionMode === 'create')
        {
            
          dispatch(addEducationProgramm(savingEducationProgramm))
        }
        if (edProgrammActionMode === 'edit' && selectedGroup)
        {
            console.log(savingEducationProgramm);
          dispatch(editEducationProgramm({
            ... savingEducationProgramm,
            id: selectedGroupId,
            title: edProgTitle,
            year: edProgYear,
            description: edProgDescription
          }))
        }
   
        closeEdProgrammDialogHandler();
        
      }

      const saveRowTableDialogHandler = () => {

        if(!selectedDisciplineId){
            closeEdProgrammDialogHandler();
          return
        }

        const savingDisciplineInfo = {
            disciplineId: selectedDisciplineId,
            codeCompetence: tabCompetence,
            description: "",
            skill: tabSkill,
            ownership: tabOwnership,
            knowledge: tabKnowledge
          }

        if(userActionMode === 'create') {
            dispatch(addDisciplineInfo(
                savingDisciplineInfo
            ))
            closeDialogHandler();
            return;
        }
        if(!selectedDisciplineInfoId) {
          closeDialogHandler();
            return;
        }
        if(userActionMode === 'edit' && selectedDisciplineInfo) {
            dispatch(editDisciplineInfo({
                ...savingDisciplineInfo,
            id: selectedDisciplineInfo.id,
            codeCompetence: tabCompetence,
            description: "",
            skill: tabSkill,
            ownership: tabOwnership,
            knowledge: tabKnowledge
            }));
        }
        closeDialogHandler();
    }

    const saveDisciplineDialogHandler = () => {

        if(!selectedGroupId){
            closeDisciplineDialogHandler();
          return
        }

        const savingDiscipline = {
            edProgrammId: selectedGroupId,
            codeDiscipline: discCodeDisc,
            title: discTitle,
            shortName: discShortName,
            status: "Новая",
            goal: discGoal,
            task: discTask
          }

        if(disciplineActionMode === 'create') {
            console.log(savingDiscipline);
            dispatch(addDiscipline(
                savingDiscipline
            ))
            closeDisciplineDialogHandler();
            return;
        }
        if(!selectedDisciplineId) {
          closeDisciplineDialogHandler();
            return;
        }
        if(disciplineActionMode === 'edit' && selectedDiscipline) {
            console.log(id)
            dispatch(editDiscipline({
                ...savingDiscipline,
            id: selectedDisciplineId,
            codeDiscipline: discCodeDisc,
            title: discTitle,
            shortName: discShortName,
            status: discStatus,
            goal: discGoal,
            task: discTask
            }));
        }
        closeDisciplineDialogHandler();
    }



    const onEdProgDeleteHandler= (id:number) => {
        setEdProgrammToEdit(id);
        if(role === 'oop'|| role === 'admin')
        {if(window.confirm('Вы действительно хотите удалить запись?')){
          dispatch(deleteEducationProgramm(id));
        }}
        else if (role === 'rpd')
          {
            window.Error('Удалять элементы может только менеджер')
          }
      }

    const onDisciplineInfoDeleteHandler= (id:number) => {
        setRowToEdit(id);
       
          if(window.confirm('Вы действительно хотите удалить запись?')){
            dispatch(deleteDisciplineInfo(id));
          }
      }
    
    const onDisciplineDeleteHandler= (id:number) => {
        setDisciplineToEdit(id);
        if(role === 'oop'|| role === 'admin')
          {if(window.confirm('Вы действительно хотите удалить запись?')){
            dispatch(deleteDiscipline(id));
          }}
          else if (role === 'rpd')
            {
              window.Error('Удалять элементы может только менеджер')
            }
      }

    
    return(

        <Layout title="Управление документацией образовательной программы" >
             <Dialog title={ 'Строка таблицы'}
                open={showDialog} 
                onSave={saveRowTableDialogHandler}
                onCancel={closeDialogHandler}
            >
                {tableDialogContentRenderer()}
            </Dialog>

            {role === 'oop'&&(<Dialog title="Образовательная программа"
                open={showEdProgrammDialog} 
                onSave={saveEdProgrammDialogHandler}
                onCancel={closeEdProgrammDialogHandler}
            >
                <TextField labelText="Наименование" value={edProgTitle} onChange={(val) => setEdProgTitle(val)}/>
                <TextField labelText="Год" value={edProgYear} onChange={(val) => setEdProgYear(val)}/>
                <TextField labelText="Описание" value={edProgDescription} onChange={(val) => setEdProgDescription(val)}/>
            </Dialog>)}

            {role === 'oop'&&(<Dialog title="Дисцплина"
                open={showDisciplineDialog} 
                
               onSave={saveDisciplineDialogHandler}
                onCancel={closeDisciplineDialogHandler}
            >
                {/* <TextField labelText="Код дисциплины" value={discCodeDisc} onChange={(val) => setDiscCodeDisc(val)}/> */}
                <TextField labelText="Короткое имя" value={discShortName} onChange={(val) => setDiscShortName(val)}/>
                <TextField labelText="Название" value={discTitle} onChange={(val) => setDiscTitle(val)}/>
                <TextField labelText="Цель" value={discGoal} onChange={(val) => setDiscGoal(val)}/>
                <TextField labelText="Задача" value={discTask} onChange={(val) => setDiscTask(val)}/>
                <DropDown selectedChanged={(val) => statusChangedHandler(val)}  label="Укажите роль" items={[
             
            
             {
               text: 'Новая', value: 'Новая'
             },
             {
                text: 'В работе', value: 'В работе'
              },
              {
               text: 'Утверждена', value: 'Утверждена'
             },
             
             {
                text: 'Готова', value: 'Готова'
              },
             {
               text: 'Завершена', value: 'Завершена'
             }
           ]} />
            </Dialog>)}

          <div className='info-page'>  
            <div className='info-page__group-info'>
                <div className='info-page__group-info__title'>
                     <h1 className='info-page__group-info__title'>Мои дисциплины</h1>
                    {selectedGroup&& role === 'oop' &&(<PlusIcon onClick={createDisciplineHandler}/>)}
                </div>
               

                <DisciplineList  open = {showDisciplineList} disciplineList={disciplineData} onItemEdit={editDisciplineHandler}
                 onItemClick={(id) => disciplineSelectedHandler(id)} onItemDelete={onDisciplineDeleteHandler}/>

             <div className='info-page__group-info__title'> 
                <h1 className='info-page__group-info__title' >Список образовательных программ </h1>
                {role === 'oop' &&(<PlusIcon onClick={createEdProgrammHandler}/>)}
            </div>
                <GroupList  groupList={educationProgramms} onItemEdit={editEdProgrammHandler} onItemClick={(id) => groupSelectedHandler(id)} 
                onItemDelete={onEdProgDeleteHandler} />   
            </div>

            <div className='info-page__main-info'>
            {showTitle&&(<div >{titleInfo}</div>)}
           {showTable&& (<InfoTable  tabs={[infoTableTab, resultsTableTab, laborIntensityTableTab]} onTabClick={(id) => tabSelectedHandler(id)} >

            {showTabRes&&(<Table onItemEdit={editLineHandler} onItemClick = {(id) => disciplineInfoSelectedHandler(id)}  className='info-page__table' items={infoData} compDescription={competenceInfo} onItemAdd={createDisciplineInfoHandler} onItemDelete={onDisciplineInfoDeleteHandler}  />)}
            {showTabInfo&&(<Information disciplines={ disciplineData} />)}
            {showTabLabor&&(<LaborIntensityPole labIntensities={laborIntensity} />)}


            </InfoTable>
            )}
           
           </div>
        </div>
         </Layout>
    )
        
}