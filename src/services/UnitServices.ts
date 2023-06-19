import api from './api'

export interface Units {
    id?: number,
    unit: string,
    address: string,
    cityState: string,
    responsible: string,
    email: string,
    titleColor: string,
    bodyColor: string,
}

export const createUnit = async (unit: Units): Promise<Units> => {
    const response = await api.post<Units>('admin/adicionar-unidade', unit);
    return response.data;
}

export const getAllUnits = async (): Promise<Units[]> => {
    const response = await api.get<Units[]>('/unidades');
    return response.data;
}

export const getUnitsById = async (id: number): Promise<Units> => {
    const response = await api.get<Units>(`/unidades/${id}`);
    return response.data;
}

export const updateUnit = async (unit: Units): Promise<Units> => {
    const response = await api.put<Units>(`/unidades/${unit.id}`, unit);
    return response.data;
}

export const deleteUnit = async (id: number | undefined): Promise<Units> => {
    const response = await api.delete<Units>(`/unidades/${id}`);
    return response.data;
}

export const createOrUpdateUnits = async (unit: Units): Promise<Units> => {
    if (!unit.id) {
        return await createUnit(unit);
    } else {
        return await updateUnit(unit);
    }
}