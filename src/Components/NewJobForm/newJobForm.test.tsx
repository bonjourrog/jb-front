import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
const createJob = vi.fn();
        vi.mock('../../hooks/useJobs', () => {
            return {
                useJobs: () => ({
                    createJob: createJob
                })
            }
        })
import NewJobForm from './index';
import { describe, it, vi } from 'vitest';
import { Job } from '../../entity/job';
import { JOB_DATA_MOCK } from '../../__mocks__/data/job.mock';

describe('NewJobForm', () => {
    it('renders form correctly on initial load', () => {
        const defaultProps = { setShowForm: vi.fn(), jobData: null }
        render(<NewJobForm  {...defaultProps} />);
        expect(screen.getByText('Nuevo empleo')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Crear/i })).toBeInTheDocument();
    });
    it('if jobData is provided, the form fields should be pre-filled with the job data', () => {
        const jobData: Job = JOB_DATA_MOCK;
        const defaultProps = { setShowForm: vi.fn(), jobData };
        render(<NewJobForm {...defaultProps} />);
        expect(screen.getByDisplayValue('desarrollador frontend')).toBeInTheDocument();
        expect(screen.getByDisplayValue('matutino')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Tecnología')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Modificar/i })).toBeInTheDocument();
    });
    it('show errors on trying submits with required fileds empty', async () => {
        render(<NewJobForm setShowForm={vi.fn()} jobData={null} />);
        fireEvent.click(screen.getByRole('button', { name: /Crear/i }));
        await waitFor(() => {
            expect(screen.getByText(/El titulo es muy corto/i)).toBeInTheDocument();
        });
    });
    it('submit is call and it creates a new job', async() => {
        render(<NewJobForm setShowForm={vi.fn()} jobData={null}/>)
        fireEvent.change(screen.getByLabelText(/Nombre/i), {target:{value: 'desarrollador frontend'}});
        fireEvent.change(screen.getByLabelText(/Salario/i), {target:{value: 500}});
        await userEvent.type(screen.getByTestId(/description/i),'Se requiere desarrollador frontend con conocimiento en React');
        fireEvent.change(screen.getByLabelText(/Descripcion corta/i), {target:{value: 'Se busca desarrollador con experiencia en React'}});
        fireEvent.change(screen.getByLabelText(/Beneficios/i), {target:{value: ['beneficio1', 'beneficio2']}});
        const selectIndustry = screen.getByRole('button', {name: /Industria/i});
        // fireEvent.change(screen.getByLabelText(/Indistria/i), {target:{value: 'Tecnología'}});
        // fireEvent.change(screen.getByLabelText(/Schedule/i), {target:{value: 'matutino'}});
        // fireEvent.change(screen.getByLabelText(/Contract Type/i), {target:{value: 'tiempo completo'}});
        fireEvent.click(screen.getByRole('button', {name: /Crear/i}));
        await waitFor(()=>{
            expect(createJob).toHaveBeenCalled();
        })
    })
})