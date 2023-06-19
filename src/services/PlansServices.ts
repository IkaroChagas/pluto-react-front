import api from './api'

export interface Plans {
    id?: number,
    image: string,
    title: string,
    titleColor: string,
    planValue: string,
    buttonValue: string,
    buttonColor: string,
    buttonTextColor: string,
    buttonIconColor: string,
}

export const createPlans = async (plans: Plans): Promise<Plans> => {
    const response = await api.post<Plans>('admin/adicionar-plano', plans);
    return response.data;
}

export const getAllPlans = async (): Promise<Plans[]> => {
    const response = await api.get<Plans[]>('/planos');
    return response.data;
}

export const getPlansById = async (id: number): Promise<Plans> => {
    const response = await api.get<Plans>(`/planos/${id}`);
    return response.data;
}

export const updatePlans = async (plans: Plans): Promise<Plans> => {
    const response = await api.put<Plans>(`/planos/${plans.id}`, plans);
    return response.data;
}

export const deletePlans = async (id: number | undefined): Promise<Plans> => {
    const response = await api.delete<Plans>(`/planos/${id}`);
    return response.data;
}

export const createOrUpdatePlans = async (plans: Plans): Promise<Plans> => {
    if (!plans.id) {
        return await createPlans(plans);
    } else {
        return await updatePlans(plans);
    }
}