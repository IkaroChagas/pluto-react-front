import api from './api'

export interface IPlan {
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

export const createPlan = async (plan: IPlan): Promise<IPlan> => {
    const response = await api.post<IPlan>('/plans', plan);
    return response.data;
}

export const getAllPlans = async (): Promise<IPlan[]> => {
    const response = await api.get<IPlan[]>('/plans');
    return response.data;
}

export const getPlansById = async (id: number): Promise<IPlan> => {
    const response = await api.get<IPlan>(`/plans/${id}`);
    return response.data;
}

export const updatePlan = async (plan: IPlan): Promise<IPlan> => {
    const response = await api.put<IPlan>(`/plans/${plan.id}`, plan);
    return response.data;
}

export const deletePlan = async (id: number | undefined): Promise<IPlan> => {
    const response = await api.delete<IPlan>(`/plans/${id}`);
    return response.data;
}

export const createOrUpdatePlans = async (plan: IPlan): Promise<IPlan> => {
    if (!plan.id) {
        return await createPlan(plan);
    } else {
        return await updatePlan(plan);
    }
}