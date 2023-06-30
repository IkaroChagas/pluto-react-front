import api from './api'

export interface IUnits {
    id?: number,
    name: string
    unit: string,
    address: string,
    cityState: string,
    responsibleName: string,
    responsibleEmail: string,
    titleColor: string,
    bodyColor: string,
}

export const createUnit = async (unit: IUnits): Promise<IUnits> => {
    const response = await api.post<IUnits>('/units', unit);
    return response.data;
}

export const getAllUnits = async (): Promise<IUnits[]> => {
    const response = await api.get<IUnits[]>('/units');
    return response.data;
}

export const getUnitById = async (id: number): Promise<IUnits> => {
    const response = await api.get<IUnits>(`/units/${id}`);
    return response.data;
}

export const updateUnit = async (unit: IUnits): Promise<IUnits> => {
    const response = await api.put<IUnits>(`/units/${unit.id}`, unit);
    return response.data;
}

export const deleteUnit = async (id: number | undefined): Promise<IUnits> => {
    const response = await api.delete<IUnits>(`/units/${id}`);
    return response.data;
}

export const createOrUpdateUnit = async (unit: IUnits): Promise<IUnits> => {
    if (!unit.id) {
        return await createUnit(unit);
    } else {
        return await updateUnit(unit);
    }
}