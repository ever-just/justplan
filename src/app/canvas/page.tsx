'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  Users, 
  Heart, 
  Package, 
  Megaphone, 
  ArrowRightLeft, 
  DollarSign, 
  Wrench, 
  UserCheck, 
  TrendingUp,
  Plus,
  Edit
} from 'lucide-react'
import Link from 'next/link'

interface BMCSection {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  items: string[]
  color: string
}

export default function CanvasPage() {
  const [selectedSection, setSelectedSection] = useState<BMCSection | null>(null)
  const [editingItems, setEditingItems] = useState<string[]>([])

  const bmcSections: BMCSection[] = [
    {
      id: 'key-partners',
      title: 'Key Partners',
      description: 'Who are our key partners and suppliers?',
      icon: <UserCheck className="h-5 w-5" />,
      items: [
        'Strategic alliances',
        'Supplier relationships', 
        'Joint ventures',
        'Key partnerships'
      ],
      color: 'border-blue-500'
    },
    {
      id: 'key-activities',
      title: 'Key Activities',
      description: 'What key activities does our value proposition require?',
      icon: <Wrench className="h-5 w-5" />,
      items: [
        'Production activities',
        'Problem solving',
        'Platform/network',
        'Marketing & sales'
      ],
      color: 'border-green-500'
    },
    {
      id: 'key-resources',
      title: 'Key Resources',
      description: 'What key resources does our value proposition require?',
      icon: <Package className="h-5 w-5" />,
      items: [
        'Physical assets',
        'Intellectual property',
        'Human resources',
        'Financial resources'
      ],
      color: 'border-purple-500'
    },
    {
      id: 'value-propositions',
      title: 'Value Propositions',
      description: 'What value do we deliver to customers?',
      icon: <Heart className="h-5 w-5" />,
      items: [
        'Unique value offering',
        'Problem solving',
        'Customer needs fulfillment',
        'Product/service benefits'
      ],
      color: 'border-red-500'
    },
    {
      id: 'customer-relationships',
      title: 'Customer Relationships',
      description: 'What type of relationship do we establish with customers?',
      icon: <ArrowRightLeft className="h-5 w-5" />,
      items: [
        'Personal assistance',
        'Self-service',
        'Automated services',
        'Communities'
      ],
      color: 'border-yellow-500'
    },
    {
      id: 'channels',
      title: 'Channels',
      description: 'Through which channels do we reach customers?',
      icon: <Megaphone className="h-5 w-5" />,
      items: [
        'Direct sales',
        'Online platforms',
        'Retail partners',
        'Distribution channels'
      ],
      color: 'border-orange-500'
    },
    {
      id: 'customer-segments',
      title: 'Customer Segments',
      description: 'For whom are we creating value?',
      icon: <Users className="h-5 w-5" />,
      items: [
        'Target demographics',
        'Market segments',
        'Customer personas',
        'User groups'
      ],
      color: 'border-indigo-500'
    },
    {
      id: 'cost-structure',
      title: 'Cost Structure',
      description: 'What are the most important costs in our business model?',
      icon: <TrendingUp className="h-5 w-5" />,
      items: [
        'Fixed costs',
        'Variable costs',
        'Economies of scale',
        'Cost optimization'
      ],
      color: 'border-pink-500'
    },
    {
      id: 'revenue-streams',
      title: 'Revenue Streams',
      description: 'For what value are customers willing to pay?',
      icon: <DollarSign className="h-5 w-5" />,
      items: [
        'Product sales',
        'Subscription fees',
        'Licensing',
        'Service revenue'
      ],
      color: 'border-emerald-500'
    }
  ]

  const handleEditSection = (section: BMCSection) => {
    setSelectedSection(section)
    setEditingItems([...section.items])
  }

  const addNewItem = () => {
    setEditingItems([...editingItems, ''])
  }

  const updateItem = (index: number, value: string) => {
    const newItems = [...editingItems]
    newItems[index] = value
    setEditingItems(newItems)
  }

  const removeItem = (index: number) => {
    const newItems = editingItems.filter((_, i) => i !== index)
    setEditingItems(newItems)
  }

  const saveChanges = () => {
    if (selectedSection) {
      selectedSection.items = editingItems.filter(item => item.trim() !== '')
      setSelectedSection(null)
      setEditingItems([])
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Business Model Canvas</h1>
          <p className="text-zinc-400 mt-2">Interactive business model design tool</p>
        </div>
        <Link href="/">
          <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
            Back to Home
          </Button>
        </Link>
      </div>

      {/* BMC Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
        {bmcSections.map((section, index) => (
          <Card 
            key={section.id} 
            className={`bg-zinc-900 border-2 ${section.color} hover:bg-zinc-800 transition-all duration-200 cursor-pointer group ${
              index === 3 ? 'lg:col-span-1 xl:col-span-1' : ''
            } ${
              index >= 7 ? 'md:col-span-1' : ''
            }`}
            onClick={() => handleEditSection(section)}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-sm md:text-base">
                <div className={`p-2 rounded-lg bg-zinc-800 text-white group-hover:bg-zinc-700 transition-colors`}>
                  {section.icon}
                </div>
                {section.title}
              </CardTitle>
              <CardDescription className="text-xs md:text-sm text-zinc-400">
                {section.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                {section.items.slice(0, 3).map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full flex-shrink-0" />
                    <span className="text-xs md:text-sm text-zinc-300 truncate">{item}</span>
                  </div>
                ))}
                {section.items.length > 3 && (
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full flex-shrink-0" />
                    <span className="text-xs text-zinc-500">+{section.items.length - 3} more</span>
                  </div>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Badge variant="secondary" className="text-xs bg-zinc-800 text-zinc-300">
                  {section.items.length} items
                </Badge>
                <Edit className="h-3 w-3 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Dialog */}
      <Dialog open={selectedSection !== null} onOpenChange={() => setSelectedSection(null)}>
        <DialogContent className="bg-zinc-900 border-zinc-700 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {selectedSection?.icon}
              {selectedSection?.title}
            </DialogTitle>
            <DialogDescription className="text-zinc-400">
              {selectedSection?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-6">
            <Label className="text-sm font-medium">Items</Label>
            <div className="space-y-3">
              {editingItems.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={item}
                    onChange={(e) => updateItem(index, e.target.value)}
                    placeholder="Enter item description..."
                    className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeItem(index)}
                    className="px-3"
                  >
                    ×
                  </Button>
                </div>
              ))}
            </div>
            
            <Button
              onClick={addNewItem}
              variant="outline"
              className="w-full border-zinc-700 text-white hover:bg-zinc-800"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add New Item
            </Button>

            <Separator className="bg-zinc-700" />
            
            <div className="flex gap-3 pt-4">
              <Button onClick={saveChanges} className="flex-1 bg-blue-600 hover:bg-blue-700">
                Save Changes
              </Button>
              <Button 
                onClick={() => setSelectedSection(null)} 
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}