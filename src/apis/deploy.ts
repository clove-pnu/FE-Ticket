import { deployInstance } from './instance';

export async function getNamespaces() {
  return deployInstance.get('/server/list');
}

export async function getPods({ namespace }: { namespace: string }) {
  return deployInstance.get(`/server/${namespace}/pods`);
}
