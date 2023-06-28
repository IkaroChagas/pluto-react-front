import api from './api'

export interface IUnits {
    id?: number,
    unit: string,
    address: string,
    cityState: string,
    responsible: string,
    email: string,
    titleColor: string,
    bodyColor: string,
}

export const createUnit = async (units: IUnits): Promise<IUnits> => {
    const response = await api.post<IUnits>('/units', units);
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

export const updateUnit = async (units: IUnits): Promise<IUnits> => {
    const response = await api.put<IUnits>(`/units/${units.id}`, units);
    return response.data;
}

export const deleteUnit = async (id: number | undefined): Promise<IUnits> => {
    const response = await api.delete<IUnits>(`/units/${id}`);
    return response.data;
}

export const createOrUpdateUnit = async (units: IUnits): Promise<IUnits> => {
    if (!units.id) {
        return await createUnit(units);
    } else {
        return await updateUnit(units);
    }
}